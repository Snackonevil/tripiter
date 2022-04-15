import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { FaCheckCircle } from 'react-icons/fa'

export default function UploadImage({
    img_url,
    setImgUrl,
    imgName,
    setImgName,
}) {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    // File type validation
    const types = ['image/png', 'image/jpeg']

    function handleChange(e) {
        let selected = e.target.files[0]
        console.log('Uploading file...')

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setImgName(selected.name)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpg)')
        }
    }

    return (
        <div className="upload-form">
            <div className="add-img-input">
                <div className="add-img">
                    <div className="img-label">Add Image</div>
                    <input type="file" onChange={handleChange} />
                </div>
                <div className="file-name">{imgName}</div>
            </div>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && (
                    <ProgressBar
                        file={file}
                        setFile={setFile}
                        setImgUrl={setImgUrl}
                    />
                )}
                {img_url !== '/placeholder.png' && !file ? (
                    <FaCheckCircle
                        style={{
                            color: 'green',
                            fontSize: '2rem',
                            justifySelf: 'flex-end',
                        }}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
