import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Global Auth Context
import { useAuth } from '../hooks/useAuth'
import GoogleButton from 'react-google-button'

// Apollo Client and Auth
import Auth from '../utils/auth'
import { useMutation } from '@apollo/client'
import { LOGIN_USER, LOGIN_GOOGLE_USER } from '../utils/mutations'

import { motion } from 'framer-motion'

export default function LoginPage() {
    // Component State
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [loginError, setLoginError] = useState('')

    // Mutations
    const [login] = useMutation(LOGIN_USER)
    const [loginGoogleUser] = useMutation(LOGIN_GOOGLE_USER)

    // Form state handler
    function handleChange(e) {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    // Auth Hook
    const { googleAuth, loginUser, signOutUser, setCurrentUser } = useAuth()

    // React-Router-Dom navigation
    const navigate = useNavigate()

    // Login handler
    async function handleLogin(e) {
        e.preventDefault()
        try {
            const { data } = await login({
                variables: { ...formData },
            })

            // Login user for Firebase Authentication for storage bucket
            await loginUser(formData.email, formData.password)

            Auth.login(data.login.token)
            setCurrentUser(data.login.user)
            navigate('/')
        } catch (err) {
            setLoginError(err.message)
            console.error(err)
        }

        // clear form values
        setFormData({
            email: '',
            password: '',
        })
    }

    // Handle Google authentication
    async function handleGoogleAuth(e) {
        e.preventDefault()
        try {
            const result = await googleAuth()
            const userEmail = result.user.email

            const { data } = await loginGoogleUser({
                variables: { email: userEmail },
            })

            Auth.login(data.loginGoogleUser.token)
            setCurrentUser(data.loginGoogleUser.user)
            navigate('/')
        } catch (err) {
            setLoginError('Google account not associated with Tripiter')
            signOutUser()
            console.log(err.message)
        }
    }

    const backgroundVariant = {
        hidden: {
            opacity: 0,
            scale: 1.1,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 2,
            },
        },
    }
    const formVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 1.5,
            },
        },
    }

    return (
        <>
            <motion.div
                variants={backgroundVariant}
                initial="hidden"
                animate="visible"
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL + `/login-background.png`
                    })`,
                    height: '100vh',
                    width: '100vw',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    top: '0',
                }}
            ></motion.div>
            <motion.div
                variants={formVariant}
                initial="hidden"
                animate="visible"
                className="login-page"
            >
                <div className="banner-container">
                    <h1 className="banner">Login to share your trips</h1>
                </div>
                <div className="login-container">
                    <h1>Welcome to Tripiter</h1>
                    <form>
                        {loginError ? (
                            <p
                                style={{
                                    color: 'red',
                                    textAlign: 'center',
                                    margin: '0',
                                    padding: '0',
                                }}
                            >
                                {loginError}
                            </p>
                        ) : (
                            ''
                        )}
                        <div className="inputs">
                            <div className="form-element">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-element">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                        <button onClick={handleLogin}>Login</button>
                        <h4>or</h4>
                        <button
                            onClick={handleGoogleAuth}
                            style={{
                                backgroundColor: 'transparent',
                                width: '100%',
                            }}
                        >
                            <GoogleButton
                                label="Login with Google"
                                type="light"
                                style={{
                                    width: '100%',
                                    borderRadius: '30px',
                                    overflow: 'hidden',
                                }}
                            />
                        </button>
                    </form>
                    <p>
                        New here? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
                <div className="overlay"></div>
            </motion.div>
        </>
    )
}
