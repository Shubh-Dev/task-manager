interface PrimaryButtonProps {
    text: string
    bgColor: string
    textColor: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, bgColor, textColor}) => {
    return (
        <button type="button" className={`${bgColor} ${textColor} p-2 rounded-md`}>{text}</button>
    )
}

export default PrimaryButton