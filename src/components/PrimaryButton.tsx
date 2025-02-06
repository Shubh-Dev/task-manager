interface PrimaryButtonProps {
  text: string
  bgColor: string
  textColor: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  bgColor,
  textColor,
  type="button",
  onClick
}) => {
  return (
    <button onClick={onClick} type={type} className={`${bgColor} ${textColor} p-2 rounded-md`}>
      {text}
    </button>
  )
}

export default PrimaryButton
