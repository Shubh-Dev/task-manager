import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

interface CreateProps {
  isOPen: boolean
  onClose: () => void
}

const Create: React.FC<CreateProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
   if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 z-50">
      <div
        className="bg-white rounded-2xl  shadow-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-3">
          <p className="text-xl font-semibold">Create Task</p>
          <IoClose className="text-2xl" onClick={onClose} />
        </div>

        <p className="border border-gray-200 mt-4"></p>


       <div>
        
       </div>
      </div>
      
    </div>
  )
}
export default Create
