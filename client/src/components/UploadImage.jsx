import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { FaCheckCircle } from 'react-icons/fa'

export default function UploadImage({ img_url, setImgUrl }) {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const fileInputStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        margin: '0',
        height: '100%',
        padding: '0',
        background: 'transparent',
        border: 'none',
    }
    // File type validation
    const types = ['image/png', 'image/jpeg']

    function handleChange(e) {
        let selected = e.target.files[0]
        console.log('file uploaded')

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpg)')
        }
    }

    return (
        <div style={fileInputStyles} className="upload-form">
            <input type="file" onChange={handleChange} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && (
                    <ProgressBar
                        file={file}
                        setFile={setFile}
                        setImgUrl={setImgUrl}
                    />
                )}
                {img_url !== './placeholder.png' && !file ? (
                    <FaCheckCircle
                        style={{ color: 'green', fontSize: '2rem' }}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
