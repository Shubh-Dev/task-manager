interface CategoryInputProps {
  text: string
  isSelected: boolean
  onClick: () => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  text,
  isSelected,
  onClick,
}) => {
  return (
    // <input
    //   type="input"
    //   placeholder={text}
    //   value={value}
    //   onChange={(e) => setValue(e.target.value)} // Allow editing
    //   onClick={onClick}
    //   className={`max-w-[100px] text-center px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none text-sm ${isSelected ? 'bg-blue-200 border-blue-400' : 'bg-white'} transition-colors`}
    // />
    <button
      onClick={onClick}
      disabled={isSelected} // Disable the button once selected
      className={`w-[100px] text-center px-4 py-2 border border-gray-300 rounded-3xl text-sm transition-colors
        ${isSelected ? 'bg-[#7B1984] text-white' : 'bg-white'} cursor-pointer`}
    >
      {text}
    </button>
  )
}

export default CategoryInput
