import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import GoogleButton from 'react-google-button'

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password2: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const [error, setError] = useState('')

    // Auth Context
    const { signUp, googleAuth } = useAuth()

    //Sign Up button handler
    async function handleSignUp(e) {
        e.preventDefault()

        try {
            await signUp(formData.username, formData.email, formData.password)
        } catch (err) {
            setError(err.message)
        }
    }

    // Google Button handler
    async function handleGoogleAuth(e) {
        e.preventDefault()
        const result = await googleAuth()
        // navigate to create profile
    }

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/login-background.png
                    )`,
                    height: '100vh',
                    width: '100vw',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    top: '0',
                }}
            ></div>
            <div className="login-page">
                <div className="banner-container">
                    <h1 className="banner">Sign up to share your trips</h1>
                </div>
                <div className="login-container">
                    <h1>Welcome to Tripiter</h1>
                    <form>
                        {error ? (
                            <p
                                style={{
                                    color: 'red',
                                    textAlign: 'center',
                                    margin: '0',
                                    padding: '0',
                                }}
                            >
                                {error}
                            </p>
                        ) : (
                            ''
                        )}
                        <div className="inputs">
                            <div
                                className="form-element"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <input
                                    style={{ width: '49%' }}
                                    onChange={handleChange}
                                    name="first_name"
                                    id="first_name"
                                    value={formData.first_name}
                                    type="text"
                                    placeholder=" first name"
                                    required
                                />
                                <input
                                    style={{ width: '49%' }}
                                    onChange={handleChange}
                                    name="last_name"
                                    id="last_name"
                                    value={formData.last_name}
                                    type="text"
                                    placeholder=" last name"
                                    required
                                />
                            </div>
                            <div className="form-element">
                                <input
                                    name="username"
                                    id="username"
                                    onChange={handleChange}
                                    value={formData.username}
                                    type="text"
                                    placeholder=" enter a username"
                                    required
                                />
                            </div>
                            <div className="form-element">
                                <input
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    type="text"
                                    placeholder="enter your email"
                                    required
                                />
                            </div>
                            <div className="form-element">
                                <input
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                    type="password"
                                    placeholder="enter a password"
                                    required
                                />
                                {formData.password.length >= 1 &&
                                formData.password.length < 6 ? (
                                    <p
                                        style={{
                                            color: 'red',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Password must be at least 6 characters
                                    </p>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="form-element">
                                <input
                                    name="password2"
                                    id="password2"
                                    onChange={handleChange}
                                    value={formData.password2}
                                    type="password"
                                    placeholder="confirm password"
                                    required
                                />
                            </div>
                            {formData.password !== formData.password2 ? (
                                <p
                                    style={{
                                        color: 'red',
                                        textAlign: 'center',
                                    }}
                                >
                                    Passwords must match
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                        <button
                            disabled={
                                formData.username.length > 0 &&
                                formData.email.length > 0 &&
                                formData.password.length >= 6 &&
                                formData.password === formData.password2
                                    ? false
                                    : true
                            }
                            onClick={handleSignUp}
                        >
                            Continue
                        </button>
                        <h4>or</h4>
                        <button
                            onClick={handleGoogleAuth}
                            style={{
                                backgroundColor: 'transparent',
                                width: '100%',
                            }}
                        >
                            <GoogleButton
                                label="Continue with Google"
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
                        Already have an account? <Link to="/login">Log In</Link>
                    </p>
                </div>
                <div className="overlay"></div>
            </div>
        </>
    )
}
