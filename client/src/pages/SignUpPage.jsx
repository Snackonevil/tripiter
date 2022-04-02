import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import GoogleButton from "react-google-button";

export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    // Auth Context
    const { signUp, googeAuth } = useAuth();

    //Sign Up button handler
    async function handleSignUp(e) {
        e.preventDefault();
        if (name.length === 0) {
            setError("Please enter your name");
            return;
        }
        if (password !== password2) {
            setError("Password inputs do not match");
            return;
        }
        try {
            await signUp(name, email, password);
        } catch (err) {
            setError(err.message);
        }
    }

    // Google Button handler
    async function handleGoogleAuth(e) {
        e.preventDefault();
    }

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/login-background.png
                    )`,
                    height: "100vh",
                    width: "100vw",
                    backgroundSize: "cover",
                    position: "absolute",
                    top: "0",
                }}
            ></div>
            <div className="login-page">
                <div className="banner-container">
                    <h1 className="banner">Sign up to share your trips</h1>
                </div>
                <div className="login-container">
                    <h1>Welcome to Tripiter</h1>
                    <form action="">
                        {error ? (
                            <h2
                                style={{ color: "red" }}
                                className="alert- error"
                            >
                                {error}
                            </h2>
                        ) : (
                            ""
                        )}
                        <div className="inputs">
                            <div className="form-element">
                                <input
                                    name="name"
                                    id="name"
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    placeholder="name"
                                    required
                                />
                            </div>
                            <div className="form-element">
                                <input
                                    name="email"
                                    id="email"
                                    onChange={e => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="email"
                                    required
                                />
                            </div>
                            <div className="form-element">
                                <input
                                    name="password"
                                    id="password"
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="password"
                                    required
                                />
                                {password.length >= 1 && password.length < 6 ? (
                                    <p
                                        style={{
                                            color: "red",
                                            textAlign: "center",
                                        }}
                                    >
                                        Password must be at least 6 characters
                                    </p>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="form-element">
                                <input
                                    name="password2"
                                    id="password2"
                                    onChange={e => setPassword2(e.target.value)}
                                    type="password"
                                    placeholder="confirm password"
                                    required
                                />
                            </div>
                        </div>
                        <button onClick={handleSignUp}>Continue</button>
                        <h4>or</h4>
                        <button
                            onClick={handleGoogleAuth}
                            style={{
                                backgroundColor: "transparent",
                                width: "100%",
                            }}
                        >
                            <GoogleButton
                                label="Continue with Google"
                                type="light"
                                style={{
                                    width: "100%",
                                    borderRadius: "30px",
                                    overflow: "hidden",
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
    );
}
