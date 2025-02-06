import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import PrimaryInput from './PrimaryInput'
import CategoryInput from './CategoryInput'
import SecondaryInput from './SecondaryInput'
import FileUploader from './FileUploader'
import PrimaryButton from './PrimaryButton'
import { useFormik } from 'formik'
import validationSchema from '../validation/taskValidation'
import { supabase } from '../utils/supabaseClient'

interface CreateProps {
  isOpen: boolean
  onClose: () => void
}

const Create: React.FC<CreateProps> = ({ isOpen, onClose }) => {

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      category: '',
      dueDate: '',
      taskStatus: '',
      files: null,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { title, description, category, dueDate, taskStatus } = values

      const { data, error } = await supabase
        .from('tasks')
        .insert([
          {
            title,
            description,
            category,
            due_date: dueDate,
            status: taskStatus,
            
          },
        ])

      if (error) {
        console.error("Error inserting task: ", error.message)
      } else {
        console.log('Task created successfully: ', data)
        resetForm()
        onClose()
      }
    },
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl py-4 shadow-lg w-full relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-3">
          <p className="text-xl font-semibold">Create Task</p>
          <IoClose className="text-2xl cursor-pointer" onClick={onClose} />
        </div>

        <p className="border border-gray-200 mt-4"></p>

        {/* Form starts here */}
        <form className="m-2" onSubmit={formik.handleSubmit}>
          <PrimaryInput
            placeholder="Task Title"
            type="input"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-500 text-sm">{formik.errors.title}</p>
          )}

          <PrimaryInput
            placeholder="Description"
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm">{formik.errors.description}</p>
          )}

          <div className="mt-4">
            <p className="text-xs text-gray-500 font-medium">Task Category*</p>
            <div className="flex gap-2 items-center mt-1">
              {['Work', 'Personal'].map((category) => (
                <CategoryInput
                  key={category}
                  text={category}
                  isSelected={formik.values.category === category}
                  onClick={() => formik.setFieldValue('category', category)}
                />
              ))}
            </div>
          </div>
          {formik.touched.category && formik.errors.category && (
            <p className="text-red-500 text-sm">{formik.errors.category}</p>
          )}

          <div className="mt-4 flex flex-col gap-4">
            <SecondaryInput
              type="date"
              label="Due On"
              placeholder="DD/MM/YYYY"
              name="dueDate"
              value={formik.values.dueDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dueDate && formik.errors.dueDate && (
              <p className="text-red-500 text-sm">{formik.errors.dueDate}</p>
            )}

            <SecondaryInput
              type="dropdown"
              label="Task Status"
              placeholder="Choose"
              name="taskStatus"
              value={formik.values.taskStatus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              options={['Not Started', 'In Progress', 'Completed']}
            />
            {formik.touched.taskStatus && formik.errors.taskStatus && (
              <p className="text-red-500 text-sm">{formik.errors.taskStatus}</p>
            )}
          </div>

          <FileUploader
            text="Drop your files here"
            onChange={(file) => {
              if(file) {
                formik.setFieldValue('files', file)
              }
            }}
          />

          <div className="rounded-md bg-gray-300 p-4 flex items-end gap-2">
            <PrimaryButton text="CANCEL" bgColor="bg-[#ffffff]" textColor="text-black" onClick={onClose} />
            <PrimaryButton text="CREATE" bgColor="bg-[#7B1984]" textColor="text-white" type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create

