import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

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

  const validationSchema = Yup.object({
    title: Yup.string().required('Task title is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    dueDate: Yup.string().required('Due date is required'),
    taskStatus: Yup.string().required('Task status is required'),
  })

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    const { title, description, category, dueDate, taskStatus } = values

    const { data, error } = await supabase.from('tasks').insert([
      {
        title,
        description,
        category,
        due_date: dueDate,
        status: taskStatus,
      },
    ])

    if (error) {
      console.error('Error inserting task:', error)
    } else {
      console.log('Task inserted successfully:', data)
      onClose()
    }

    setSubmitting(false)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create Task</h2>
        <Formik
          initialValues={{
            title: '',
            description: '',
            category: '',
            dueDate: '',
            taskStatus: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <Field
                  type="text"
                  name="description"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <Field
                  type="text"
                  name="category"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                  Due Date
                </label>
                <Field
                  type="date"
                  name="dueDate"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="dueDate" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="taskStatus" className="block text-sm font-medium text-gray-700">
                  Task Status
                </label>
                <Field
                  type="text"
                  name="taskStatus"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="taskStatus" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-md"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Create