interface SecondaryInputProps {
  type: 'date' | 'dropdown'
  placeholder: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void
  options?: string[] // only used for dropdown
}

const SecondaryInput: React.FC<SecondaryInputProps> = ({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  options = [],
}) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>{' '}
      {/* Label added */}
      {type === 'date' ? (
        <div className="flex items-center">
          <input
            type="date"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            placeholder={placeholder}
            className="px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none"
          />
          {/* <img src="/assets/calender_icon.svg" alt="calender" className="absolute right-3" /> */}
        </div>
      ) : (
        <div className="flex items-center">
          <select
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="w-3/6 px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none"
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
          {/* <img src="assets/chevron-down.svg" alt="calender" className="absolute right-3" /> */}
        </div>
      )}
    </div>
  )
}

export default SecondaryInput
