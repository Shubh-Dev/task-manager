// components/Create.tsx
import { useState } from 'react'
import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import PrimaryInput from './PrimaryInput'
import CategoryInput from './CategoryInput'
import SecondaryInput from './SecondaryInput'
import FileUploader from './FileUploader'
import PrimaryButton from './PrimaryButton'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import validationSchema from '../validation/taskValidation'
import { supabase } from '../utils/supabaseClient'
// import * as Yup from 'yup'

interface CreateProps {
  isOpen: boolean
  onClose: () => void
}

const Create: React.FC<CreateProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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

  // const validationSchema = Yup.object({
  //   title: Yup.string().required('Task title is required'),
  //   description: Yup.string().required('Description is required'),
  //   category: Yup.string().required('Category is required'),
  //   duedate: Yup.string().required('Due date is required'),
  //   taskStatus: Yup.string().required('Task status is required'),
  // })

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    const { title, description, category, dueDate, taskStatus, files } = values

    const { data, error } = await supabase.from('tasks').insert([
      {
        title,
        description,
        category,
        due_date: dueDate,
        status: taskStatus,
        files,
      },
    ])

    if (error) {
      console.error('Error inserting task: ', error.message)
    } else {
      console.log('Task created successfully: ', data)
      onClose()
    }
    setSubmitting(false)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 z-50">
      <div
        className="bg-white rounded-2xl py-4  shadow-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-3">
          <p className="text-xl font-semibold">Create Task</p>
          <IoClose className="text-2xl" onClick={onClose} />
        </div>

        <p className="border border-gray-200 mt-4"></p>
        <Formik
          initialValues={{
            title: '',
            description: '',
            category: '',
            dueDate: '',
            taskStatus: '',
            files: null, // Handle file uploads separately
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, setFieldValue }) => (
            <Form className="m-2">
              <PrimaryInput
                placeholder="Task Title"
                type="input"
                value={values.title}
                onChange={handleChange}
                name="title"
              />
              
              <PrimaryInput
                placeholder="Description"
                type="text"
                value={values.description}
                onChange={handleChange('description')}
              />

              <div className="mt-4">
                <p className="text-xs text-gray-500 font-medium">
                  Task Category*
                </p>
                <div className="flex gap-2 items-center mt-1">
                  {['Work', 'Personal'].map((category) => (
                    <CategoryInput
                      key={category}
                      text={category}
                      isSelected={selectedCategory === category}
                      onClick={() => {
                        setSelectedCategory(category)
                        setFieldValue('category', category)
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <SecondaryInput
                  type="date"
                  label="Due On"
                  placeholder="DD/MM/YYYY"
                  value={values.dueDate}
                  onChange={handleChange('dueDate')}
                />

                <SecondaryInput
                  type="dropdown"
                  label="Task Status"
                  placeholder="Choose"
                  value={values.taskStatus}
                  onChange={handleChange('taskStatus')}
                  options={['Not Started', 'In Progress', 'Completed']}
                />
              </div>

              <FileUploader
                text="Drop your files here"
                onChange={(file: File) => setFieldValue('files', file)}
              />

              <div className="rounded-md bg-gray-300 p-4 flex items-end gap-2">
                <PrimaryButton
                  text="CANCEL"
                  bgColor="bg-[#ffffff]"
                  textColor="text-black"
                  onClick={onClose}
                />

                <PrimaryButton
                  text="CREATE"
                  bgColor="bg-[#7B1984]"
                  textColor="text-white"
                  type="submit"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default Create
