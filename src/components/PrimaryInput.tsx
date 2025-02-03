// components/PrimaryInput.tsx
import { useState } from 'react'
import { BiBold, BiItalic, BiListUl, BiListOl } from 'react-icons/bi'

interface PrimaryInputProps {
  type: 'input' | 'text'
  placeholder: string
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({ placeholder, type }) => {
  const [text, setText] = useState('')

  return (
    <div
      className={`w-full border border-gray-300 rounded-xl focus:outline-none my-2 ${
        type === 'text'
          ? 'p-4 min-h-[120px] flex flex-col justify-between'
          : 'p-2'
      }`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full focus:outline-none bg-transparent mt-1"
      />

      {type === 'text' && (
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-200 rounded-md">
              <BiBold />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded-md">
              <BiItalic />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded-md">
              <BiListUl />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded-md">
              <BiListOl />
            </button>
          </div>
          <p className="text-gray-400 text-xs">{text.length}/300 characters</p>
        </div>
      )}
    </div>
  )
}

export default PrimaryInput
