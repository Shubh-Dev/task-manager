interface PrimaryButtonProps {
  text: string
  bgColor: string
  textColor: string
  onClick: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  bgColor,
  textColor,
  onClick
}) => {
  return (
    <button onClick={onClick} type="button" className={`${bgColor} ${textColor} p-2 rounded-md`}>
      {text}
    </button>
  )
}

export default PrimaryButton
