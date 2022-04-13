import React from 'react'
import { useState, useRef } from 'react'
import { useMutation } from '@apollo/client'
import UploadImage from './UploadImage'
import ProgressBar from './ProgressBar'
import { ADD_TRIP } from '../utils/mutations'
import AddHighlight from './AddHighlight'

import Auth from '../utils/auth'
import { QUERY_TRIPS } from '../utils/queries'
//put state for logged in user

export default function AddTrip({ toggleModal, setToggleModal, userId }) {
    const [name, setName] = useState('')
    const [destination, setDestination] = useState('')
    const [description, setDescription] = useState('')
    const [img_url, setImgUrl] = useState('./placeholder.png')

    const [addTrip, { error }] = useMutation(ADD_TRIP)
    console.log(img_url)
    const handleFormSubmit = async (event) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null
        event.preventDefault()

        if (!token) {
            return false
        }

        try {
            const { data } = await addTrip({
                variables: {
                    trip: {
                        userId, //
                        name,
                        description,
                        destination,
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
            id="create-trip-modal"
            className="form-container"
            onClick={handleClick}
            style={{ position: 'fixed' }}
        >
            <h1 style={{ color: 'white' }}>Create trip</h1>
            <form
                id="trip"
                // onSubmit={handleFormSubmit}
            >
                <div className="inputs">
                    <div className="form-element">
                        <label htmlFor="trip-name">Trip Name</label>
                        <input
                            className="trip-name"
                            id="trip-name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="trip-description">Description</label>
                        <input
                            name="trip-description"
                            id="trip-description"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="trip-destination">Destination</label>
                        <input
                            name="trip-destination"
                            id="trip-destination"
                            value={destination}
                            onChange={(event) =>
                                setDestination(event.target.value)
                            }
                        />
                    </div>
                    <div className="form-element">
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
