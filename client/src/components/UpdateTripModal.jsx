import { useState } from 'react'
import { useMutation } from '@apollo/client'

// Components
import UploadImage from './UploadImage'

// Utilities
import { UPDATE_TRIP } from '../utils/mutations'
import Auth from '../utils/auth'

export default function UpdateTrip({ updateToggle, setUpdateToggle, trip }) {
    // Form State
    const [name, setName] = useState(trip.name)
    const [destination, setDestination] = useState(trip.destination)
    const [description, setDescription] = useState(trip.description)
    const [img_url, setImgUrl] = useState(trip.img_url)
    const [updateTrip, { error }] = useMutation(UPDATE_TRIP)
    const handleFormSubmit = async (event) => {
        event.preventDefault()
        /* const token = Auth.loggedIn() ? Auth.getToken() : null
        if (!token) {
            return false
        } */
        const id = trip._id

        try {
            await updateTrip({
                variables: {
                    updateTripId: id,
                    tripInput: {
                        name,
                        destination,
                        description,
                        img_url,
                    },
                },
            })
            setUpdateToggle(!updateToggle)
            /* refetch() */
            window.location.reload()
        } catch (err) {
            console.error(err)
        }
    }

    function handleClick(e) {
        if (e.target === e.currentTarget) {
            setUpdateToggle(!updateToggle)
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
            <form id="trip">
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
                <button onClick={handleFormSubmit}>Update</button>
                {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        Something went wrong...
                    </div>
                )}
            </form>
        </div>
    )
}
