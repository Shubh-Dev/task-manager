// components/taskItems.tsx
import greenCheck from '/assets/checkmark.svg'
import grayCheck from '/assets/checkmark-circle.svg'

import React from 'react'
interface TaskItemProps {
  id: string
  title: string
  status: string
}
// const greenCheck = '/assets/checkmark.svg'
// const grayCheck = '/assets/checkmark-circle.svg'

const TaskItem: React.FC<TaskItemProps> = ({ id, title, status }) => {
  return (
    <div className="bg-gray-100 flex gap-2 items-center border-b border-gray-300 p-2">
      <div>
        <input
          type="checkbox"
          id={id}
          aria-label={`Mark ${title} as completed`}
        />
      </div>
      <div>
        {/* {status === 'completed' ? <img src={greenCheck} alt="complete" /> :  <img src={grayCheck} alt="pending" /> } */}
        <img
          src={status === 'completed' ? greenCheck : grayCheck}
          alt={status}
        />
      </div>
      <span className="text-gray-800">{title}</span>
    </div>
  )
}

export default TaskItem
