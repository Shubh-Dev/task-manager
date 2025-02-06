import * as Yup from 'yup'

const validationSchema = Yup.object({
  title: Yup.string().required('Task title is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  dueDate: Yup.string().required('Due date is required'),
  taskStatus: Yup.string().required('Task status is required'),
})

export default validationSchema
