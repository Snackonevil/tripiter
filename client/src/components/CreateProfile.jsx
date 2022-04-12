import { useEffect, useState } from 'react'
import UploadImage from './UploadImage'

export default function CreateProfile() {
    const [username, setUsername] = useState()
    const [error, setError] = useState()

    // On load, populate with userdata, empty if not yet created

    function handleSaveProfile(e) {
        e.preventDefault()
        // search database for username
        // if already in use, set error
        // if available, save username, return "saved"
    }

    return (
        <>
            <UploadImage />
            <form>
                <div className="form-element">
                    <label htmlFor="username" name="Create a username" />
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <button onClick={handleSaveProfile}>Save</button>
            </form>
        </>
    )
}
