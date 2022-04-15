import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'

// Component
import UploadImage from './UploadImage'

// Utils
import { UPDATE_USER } from '../utils/mutations'
import Auth from '../utils/auth'

import { getImgName } from '../utils/imgName'

export default function UpdateProfile({
    toggleUserModal,
    setUserModal,
    user,
    refetch,
}) {
    const [username, setUsername] = useState(user.username)
    const [first_name, setFirstName] = useState(user.first_name)
    const [last_name, setLastName] = useState(user.last_name)
    const [picture, setPicture] = useState(user.picture)
    const imgName = getImgName(picture)

    const [updateUser, { error }] = useMutation(UPDATE_USER)

    const userFormSubmit = async (e) => {
        e.preventDefault()
        const token = Auth.loggedIn() ? Auth.getToken() : null
        if (!token) {
            return false
        }
        try {
            await updateUser({
                variables: {
                    updateUserId: user._id,
                    userInput: {
                        username,
                        first_name,
                        last_name,
                        picture,
                    },
                },
            })
            setUserModal(!toggleUserModal)
            refetch()
        } catch (err) {
            console.error(err)
        }
    }

    function handleClick(e) {
        if (e.target === e.currentTarget) {
            setUserModal(!toggleUserModal)
        }
    }

    return (
        <div
            id="create-user-modal"
            className="form-container"
            onClick={handleClick}
            style={{ position: 'fixed' }}
        >
            <h1 style={{ color: 'white' }}>Edit Your Profile</h1>
            <form id="user">
                <div className="inputs">
                    <div className="form-element">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="user-name"
                            id="user-name"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            className="first-name"
                            id="first-name"
                            value={first_name}
                            onChange={(event) =>
                                setFirstName(event.target.value)
                            }
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            className="last-name"
                            id="last-name"
                            value={last_name}
                            onChange={(event) =>
                                setLastName(event.target.value)
                            }
                        />
                    </div>
                    <div className="form-element">
                        <UploadImage
                            img_url={picture}
                            setImgUrl={setPicture}
                            imgName={imgName}
                        />
                    </div>
                </div>
                <button onClick={userFormSubmit}>Update</button>
                {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        Something went wrong...
                    </div>
                )}
            </form>
        </div>
    )
}
