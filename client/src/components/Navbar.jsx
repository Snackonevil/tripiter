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
                <ul

                // style={{ display: 'flex', alignItems: 'center' }}
                >
                    <li>

                        
                        <Link to="/">
                            <button>Dashboard</button>
                            {/* <h5>Dashboard</h5> */}
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleLogOut}>Log Out</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
