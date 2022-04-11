import React from 'react'
import { useState, useRef } from 'react'
import { useMutation } from '@apollo/client'
import UploadImage from './UploadImage'
import ProgressBar from './ProgressBar'
import { ADD_TRIP } from '../utils/mutations'
import AddHighlight from './AddHighlight'
// import Auth from '../utils/auth';
//put state for logged in user
export default function AddTrip({ toggleModal, setToggleModal }) {
    // const CustomButton = () => {
    //     return (
    //       <button type="submit" className="addTrip">
    //         Create Trip
    //       </button>
    //     );
    //   }
    const [name, setName] = useState('')
    const [destination, setDestination] = useState('')
    const [description, setDescription] = useState('')
    const [img_url, setImg_url] = useState('')
    const [addTrip, { error }] = useMutation(ADD_TRIP)
    const handleFormSubmit = async (event) => {
        try {
            const { data } = await addTrip({
                variables: {
                    trip: {
                        userId: '6251be6c5f16ce56f12ca268',
                        name,
                        destination,
                        description,
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
        e.preventDefault()
        e.stopPropagation()
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
        >
            <h1>Create trip</h1>
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
                        <label>
                            <input
                                type="file"
                                onClick={<UploadImage />}
                                value={img_url}
                                onChange={(event) =>
                                    setImg_url(event.target.value)
                                }
                            />
                        </label>
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
