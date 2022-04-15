import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import UploadImage from '../UploadImage'
import { ADD_HIGHLIGHT } from '../../utils/mutations'

import Auth from '../../utils/auth'

export default function AddHighlight({ toggleModal, setToggleModal }) {
    const { tripId } = useParams()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [img_url, setImgUrl] = useState('/placeholder.png')

    const [addHighlight, { error }] = useMutation(ADD_HIGHLIGHT)

    const handleFormSubmit = async (event) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null
        event.preventDefault()

        if (!token) {
            return false
        }

        try {
            await addHighlight({
                variables: {
                    highlight: {
                        tripId,
                        name,
                        description,
                        location,
                        img_url,
                    },
                },
            })
            window.location.reload()
        } catch (err) {
            console.error(err)
        }
    }

    function handleClick(e) {
        console.log(e.currentTarget.className)
        if (e.target === e.currentTarget) {
            setToggleModal(!toggleModal)
        }
    }

    return (
        <div
            id="create-highlight-modal"
            style={{ position: 'fixed' }}
            className="form-container"
            onClick={handleClick}
        >
            <h1 style={{ color: 'white' }}>Create Highlight</h1>
            <form id="highlight">
                <div className="inputs">
                    <div className="form-element">
                        <label htmlFor="highlight-name">Highlight Name</label>
                        <input
                            className="highlight-name"
                            id="highlight-name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="highlight-description">
                            Description
                        </label>
                        <input
                            name="highlight-description"
                            id="highlight-description"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="highlight-location">Location</label>
                        <input
                            name="highlight-location"
                            id="highlight-location"
                            value={location}
                            onChange={(event) =>
                                setLocation(event.target.value)
                            }
                        />
                    </div>
                    <div className="img-upload">
                        <UploadImage img_url={img_url} setImgUrl={setImgUrl} />
                    </div>
                </div>
                <button onClick={handleFormSubmit}>Create</button>
                {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        Something went wrong...
                    </div>
                )}
            </form>
        </div>
    )
}
