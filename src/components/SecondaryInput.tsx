
interface SecondaryInputProps {
  type: 'date' | 'dropdown'
  placeholder: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  options?: string[] // only used for dropdown
}

const SecondaryInput: React.FC<SecondaryInputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  options = [],
}) => {
  return (
    <div className="relative w-full">
         <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label> {/* Label added */}
      {type === 'date' ? (
        <div className="flex items-center">
          <input
            type="date"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none"
          />
          <img src="/assets/calender_icon.svg" alt="calender" className="absolute right-3" />
        </div>
      ) : (
        <div className="flex items-center">
          <select
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none"
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <img src="assets/chevron-down.svg" alt="calender" className="absolute right-3" />
          
        </div>
      )}
    </div>
  )
}

export default SecondaryInput
