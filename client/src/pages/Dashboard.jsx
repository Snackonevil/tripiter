// Hooks
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

// Components
import AddTrip from '../components/AddTrip'
import Trip from '../components/Trip'

// Apollo/GraphQL
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth'

// Accessories
import { HiPlus } from 'react-icons/hi'
import Spinner from '../components/Spinner'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

export default function Dashboard() {
    const [toggleModal, setToggleModal] = useState(false)
    const { currentUser } = useAuth()

    const { loading, data, refetch } = useQuery(QUERY_ME)

    const user = data?.me || {}
    const trips = user.trips || []

    function handleClick(e) {
        e.preventDefault()
        setToggleModal(!toggleModal)
    }

    if (loading) {
        return <Spinner />
    }

    const tripBoardVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    }

    return (
        <div className="">
            <div className="user-info">
                <img src={user.picture} alt="avatar" />
                <h1>{user.username}</h1>
            </div>
            <div className="filter">
                <h1>{trips.length} Trips</h1>
            </div>

            <main
                layout
                variants={tripBoardVariant}
                initial="hidden"
                animate="visible"
                className="trip-board"
            >
                {trips.map((trip) => {
                    return <Trip key={trip._id} trip={trip} />
                })}
            </main>

            <div className="filter d-flex justify-content-end align-items-end fixed-bottom">
                <button
                    onClick={handleClick}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <HiPlus />
                </button>
            </div>
            {toggleModal && (
                <AddTrip
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                    userId={user._id}
                    refetch={refetch}
                />
            )}
        </div>
    )
}
