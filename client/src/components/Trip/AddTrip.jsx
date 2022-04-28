import { useState } from 'react'
import { useMutation } from '@apollo/client'

// Components
import UploadImage from '../UploadImage'

// Utilities
import { ADD_TRIP } from '../../utils/mutations'
import Auth from '../../utils/auth'
import { getImgName } from '../../utils/imgName'

export default function AddTrip({
    toggleModal,
    setToggleModal,
    userId,
    refetch,
}) {
    // Form State
    const [name, setName] = useState('')
    const [destination, setDestination] = useState('')
    const [description, setDescription] = useState('')
    const [img_url, setImgUrl] = useState('/placeholder.png')
    const imgName = getImgName(img_url)

    const [addTrip, { error }] = useMutation(ADD_TRIP)
    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const token = Auth.loggedIn() ? Auth.getToken() : null
        if (!token) {
            return false
        }

        try {
            await addTrip({
                variables: {
                    trip: {
                        userId,
                        name,
                        description,
                        destination,
                        img_url,
                    },
                },
            })
            setToggleModal(!toggleModal)
            refetch()
        } catch (err) {
            console.error(err)
        }
    }

    function handleClick(e) {
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
                        <UploadImage
                            img_url={img_url}
                            setImgUrl={setImgUrl}
                            imgName={imgName}
                        />
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
