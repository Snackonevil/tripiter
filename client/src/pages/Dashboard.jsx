import { useState } from 'react'

// Components
import AddTrip from '../components/Trip/AddTrip'
import TripItem from '../components/Trip/TripItem'
import UpdateProfileModal from '../components/UpdateProfileModal'

// Apollo/GraphQL
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'
import React from 'react'

// Accessories
import { HiPlus } from 'react-icons/hi'
import Spinner from '../components/Spinner'

export default function Dashboard() {
    // Trip modal state
    const [toggleModal, setToggleModal] = useState(false)

    // User modal state
    const [toggleUserModal, setUserModal] = useState(false)

    // Query
    const { loading, data, refetch } = useQuery(QUERY_ME)
    const user = data?.me || {}
    const trips = user.trips || []

    // Toggle add trip modal
    function handleClick(e) {
        e.preventDefault()
        setToggleModal(!toggleModal)
    }

    // Toggle user modal
    function userButtonClick(e) {
        e.preventDefault()
        setUserModal(!toggleUserModal)
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <div className="header-container">
                <div className="profile">
                    <img
                        className="img_image"
                        src={user.picture}
                        alt="avatar"
                        onClick={userButtonClick}
                    />
                    <div 
                        className="img_overlay" 
                        onClick={userButtonClick}>
                            <div className="img_title">Your Profile</div>
                            <p className="img_description">click to edit</p>
                    </div>
                    <h1>{user.username}</h1>
                </div>
            </div>
            <div className="filter">
                <h1>{trips.length} Trips</h1>
            </div>

            <main className="board">
                {trips.map((trip) => {
                    return (
                        <TripItem
                            key={trip._id}
                            trip={trip}
                            refetch={refetch}
                        />
                    )
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
            {toggleUserModal && (
                <UpdateProfileModal
                    toggleUserModal={toggleUserModal}
                    setUserModal={setUserModal}
                    refetch={refetch}
                    user={user}
                />
            )}
        </>
    )
}
