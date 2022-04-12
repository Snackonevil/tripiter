import { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

export default function ProgressBar({ file, setFile, setUpload }) {
    const { url, progress } = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
            setUpload(false)
        }
    }, [url, setFile, setUpload])

    return <div>{progress}%</div>
}
