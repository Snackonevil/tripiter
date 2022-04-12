import { useState } from 'react'
import ProgressBar from './ProgressBar'

export default function UploadImage() {
    const [file, setFile] = useState(null)
    const [upload, setUpload] = useState(false)
    const [error, setError] = useState(null)

    // File type validation
    const types = ['image/png', 'image/jpeg']

    function handleChange(e) {
        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpg)')
        }
    }

    // Fire upload by rendering progressbar
    function handleUpload(e) {
        e.preventDefault()
        setUpload(true)
    }

    return (
        <form className="upload-form">
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <button onClick={handleUpload}>Upload</button>}
                {upload && (
                    <ProgressBar
                        file={file}
                        setFile={setFile}
                        setUpload={setUpload}
                    />
                )}
            </div>
        </form>
    )
}
