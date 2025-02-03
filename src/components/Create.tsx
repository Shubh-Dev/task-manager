// components/Create.tsx
import { useState } from 'react'
import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import PrimaryInput from './PrimaryInput'
import CategoryInput from './CategoryInput'
import SecondaryInput from './SecondaryInput'
import FileUploader from './FileUploader'
import PrimaryButton from './PrimaryButton'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

interface CreateProps {
  isOpen: boolean
  onClose: () => void
}

const Create: React.FC<CreateProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [dueDate, setDueDate] = useState<string>('')
  const [taskStatus, setTaskStatus] = useState<string>('')
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
      <div
        className="bg-white rounded-2xl py-4  shadow-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-3">
          <p className="text-xl font-semibold">Create Task</p>
          <IoClose className="text-2xl" onClick={onClose} />
        </div>

        <p className="border border-gray-200 mt-4"></p>
        <form className="m-2">
          <PrimaryInput placeholder="Task Title" type="input" />
          <PrimaryInput placeholder="Description" type="text" />

          <div className="mt-4">
            <p className="text-xs text-gray-500 font-medium">Task Category*</p>
            <div className="flex gap-2 items-center mt-1">
              {['Work', 'Personal'].map((category) => (
                <CategoryInput
                  key={category}
                  text={category}
                  isSelected={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <SecondaryInput
                type="date"
                label="Due On"
                placeholder="DD/MM/YYYY"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <SecondaryInput
                type="dropdown"
                label="Task Status"
                placeholder="Choose"
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
                options={['Not Started', 'In Progress', 'Completed']}
              />
            </div>
            <div>
              <FileUploader text="Drop your files here" />
            </div>
            <div className="rounded-md bg-gray-300 p-4 flex items-end gap-2">
              <PrimaryButton text="CANCEL" bgColor="bg-[#ffffff]" textColor="text-black" />
              <PrimaryButton text="CREATE" bgColor="bg-[#7B1984]" textColor="text-white" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Create
