import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'

import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
    const { currentUser, signOutUser, setCurrentUser } = useAuth()
    function handleLogOut(e) {
        e.preventDefault()
        signOutUser()
        Auth.logout()
        setCurrentUser(null)
    }
    return (
        <div className="">
            <nav>
                <img src="/tripiter.png" alt="tripiter-logo" />
                <ul>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <p onClick={handleLogOut}>Log Out</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
