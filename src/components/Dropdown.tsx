import React from 'react'

interface DropdownProps {
  label: string
  options: string[]
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  return (
    <div className="relative w-48">
      <select className="w-full border border-gray-300 rounded-md p-2 appearance-none focus:outline-none">
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="absolute right-3 top-3 text-gray-500">▼</span>
    </div>
  )
}

export default Dropdown;
