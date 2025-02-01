import React from 'react'

interface DropdownProps {
  label: string
  options: string[]
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  return (
    <div className="relative w-24 flex">
      <select className="w-full border border-gray-300 rounded-3xl p-2 appearance-none focus:outline-none text-gray-600 font-medium text-xs">
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <img
        src="/assets/chevron-down.svg"
        alt="down"
        className="absolute right-3 top-2 text-gray-500"
      />
    </div>
  )
}

export default Dropdown
