import { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

export default function ProgressBar({ file, setFile, setImgUrl }) {
    const { url, progress } = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
        }
        setImgUrl(url)
    }, [url, setFile])

    return <div>{progress}%</div>
}
