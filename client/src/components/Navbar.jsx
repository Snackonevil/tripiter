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
                <Link to="/">
                    <img src="/tripiter.png" alt="tripiter-logo" />
                </Link>

                {Auth.loggedIn() ? (
                    <ul className="nav-btns">
                        <li>
                            <Link to="/">
                                <button>Dashboard</button>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleLogOut}>Log Out</button>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link to="/signup">
                                <button>Sign Up</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    )
}
