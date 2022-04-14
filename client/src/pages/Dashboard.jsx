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
import React from "react"
import UpdateProfile from '../components/UpdateProfile'

// Accessories
import { HiPlus } from 'react-icons/hi'
import Spinner from '../components/Spinner'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { FiSettings } from 'react-icons/fi'

export default function Dashboard() {
    //trip modal
    const [toggleModal, setToggleModal] = useState(false)
    const { currentUser } = useAuth()

    //user modal
    const [toggleUserModal, setUserModal] = useState(false)

    const { loading, data, refetch } = useQuery(QUERY_ME)

    const user = data?.me || {}
    const trips = user.trips || []
    console.log(currentUser)
    console.log(user)
    //Toggle add trip modal
    function handleClick(e) {
        
        e.preventDefault()
        setToggleModal(!toggleModal)
    } 
    
    //Toggle user modal
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
                <div className="wrapper">
                    <img 
                        className="profileImg" 
                        src={user.picture} 
                        alt="avatar" 
                        onClick={ userButtonClick }
                        />
                    <h1>{user.username}</h1>
                    {/* <button className="user-update" title="Edit Your Profile">
                        
                    </button> */}
                </div>
            </div>
            <div className="filter">
                <h1>{trips.length} Trips</h1>
            </div>

            <main className="board">
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
            {/* trip modal here */}
            {toggleModal && (
                <AddTrip
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                    userId={user._id}
                    refetch={refetch}
                />
            )}
            {/* user modal here */}
            {toggleUserModal && (
                <UpdateProfile
                    toggleUserModal={ toggleUserModal }
                    setUserModal={ setUserModal }
                    refetch={ refetch }
                    user={ user }
                />
            )}
        </>
    )
}
