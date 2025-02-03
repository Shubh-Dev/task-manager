interface FileUploaderProps {
    text: string
}

const FileUploader: React.FC<FileUploaderProps> =({text}) => {
    return (
        <div>
            <p>Attachment</p>
        <input type="file" className="w-full border border-gray-300 rounded-xl p-2 my-2" placeholder={text} />
        </div>
    )
}

export default FileUploader