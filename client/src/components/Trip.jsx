import { HiOutlineTrash } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import TripModal from './TripModal'
import { useMutation } from '@apollo/client'
import { REMOVE_TRIP } from '../utils/mutations'
import { useState } from 'react'
import UpdateTripModal from './UpdateTripModal'
import PrivateComponent from '../components/PrivateComponent'

export default function Trip({ trip }) {
    const navigate = useNavigate()

    const [removeTrip, { error }] = useMutation(REMOVE_TRIP)

    const [updateToggle, setUpdateToggle] = useState(false)

    function handleClick(e) {
        e.preventDefault()

        navigate(`/trip/${trip._id}`)
    }
    const fadeVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    async function deleteTrip(e) {
        e.preventDefault()

        var result = window.confirm('Are you sure you want to delete?')
        if (result) {
            try {
                const { data } = await removeTrip({
                    variables: {
                        tripId: trip._id,
                    },
                })
            } catch (err) {
                console.log(err)
            }
            window.location.reload()
        }
    }

    function updateTrip(e) {
        e.preventDefault()
        setUpdateToggle(!updateToggle)
    }
    console.log(trip.userId)
    return (
        <>
            <motion.div
                variants={fadeVariant}
                initial="hidden"
                animate="visible"
                className="trip"
            >
                <div className="img-wrapper">
                    <img
                        onClick={handleClick}
                        src={trip.img_url}
                        alt="trip-thumbnail"
                    />
                    <PrivateComponent ownerId={trip.userId}>
                        <div className="edit-btns">
                            <button className="buttons" onClick={updateTrip}>
                                <FiSettings />
                            </button>
                            <button className="buttons" onClick={deleteTrip}>
                                <HiOutlineTrash />
                            </button>
                        </div>
                    </PrivateComponent>
                </div>

                <h4 style={{ fontSize: '1.75rem', textAlign: 'center' }}>
                    {trip.name}
                </h4>
                <p style={{ color: 'lightgray', textAlign: 'center' }}>
                    {trip.highlights.length} highlights
                </p>
            </motion.div>

            {updateToggle && (
                <UpdateTripModal
                    updateToggle={updateToggle}
                    setUpdateToggle={setUpdateToggle}
                    trip={
                        trip
                    } /* name={trip.name} description={trip.description} destination={trip.destination} img_url={trip.img_url} */
                />
            )}
        </>
    )
}
