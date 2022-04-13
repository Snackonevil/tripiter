import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'

import avatar from '../images/user-placeholder.png'
import AddTrip from '../components/AddTrip'
import Trip from '../components/Trip'
import trips from '../utils/trips'
import { HiPlus } from 'react-icons/hi'

import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth'
import UpdateProfile from '../components/UpdateProfile'

export default function Dashboard() {
    const [toggleModal, setToggleModal] = useState(false)
    const { currentUser } = useAuth()

    const { loading, data } = useQuery(QUERY_ME)

    const user = data?.me || {}
    const trips = user.trips || []
    console.log(currentUser)
    console.log(user)
    function handleClick(e) {
        
        e.preventDefault()
        setToggleModal(!toggleModal)
    }
    const editProfile = UpdateProfile    
    return (
        <div className="parent">
            <div className="user-info">
            <a href= { editProfile } title='Update Your Profile'><img src={user.picture} alt="avatar" /></a>                
            <h1>{user.username}</h1>
            </div>
            <div className="filter">
                <h1>{trips.length} Trips</h1>
            </div>
            <main className="trip-board">
                {trips.map((trip) => {
                    return <Trip key={trip._id} trip={trip} />
                })}

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
            </main>
            {toggleModal && (
                <AddTrip
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                    userId = {user._id}
                />
            )}
        </div>
    )
}
