interface FileUploaderProps {
  text: string
  onChange: (file: File | null) => void
}

const FileUploader: React.FC<FileUploaderProps> = ({ text, onChange }) => {
  return (
    <div>
      <p>Attachment</p>
      <input
        type="file"
        className="w-full border border-gray-300 rounded-xl p-2 my-2"
        placeholder={text}
        onChange={(e) => {
          const file = e.target.files?.[0] || null
          onChange(file)
        }}
      />
    </div>
  )
}

export default FileUploader
