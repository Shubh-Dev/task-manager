// components PrimaryInput.tsx
interface PrimaryInputProps {
  type: string
  placeholder: string
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none my-1"
    />
  )
}

export default PrimaryInput
