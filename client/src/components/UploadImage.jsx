import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { FaCheckCircle } from 'react-icons/fa'

export default function UploadImage({ img_url, setImgUrl }) {
    const [file, setFile] = useState(null)
    const [upload, setUpload] = useState(false)
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
        console.log("file uploaded")

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpg)')
        }
    }

<<<<<<< HEAD
    // Fire upload by rendering progressbar
    function handleUpload(e) {
        e.preventDefault()
        /* setUpload(true) */
    }

    return (
        <form className="upload-form">
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            {<div className="output">
=======
    return (
        <form style={fileInputStyles} className="upload-form">
            <input type="file" onChange={handleChange} />
            <div className="output">
>>>>>>> fd3b4006dd08254c842d14743a8aea93df028779
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
            </div>}
        </form>
    )
}
