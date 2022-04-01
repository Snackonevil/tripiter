import { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");

    const { login } = useAuth();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            setError("");
            await login(emailRef.current.value, passwordRef.current.value);
        } catch (err) {
            setError(err);
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="banner-container">
                    <h1 className="banner">Sign up to share your trips</h1>
                </div>
                <div className="login-container">
                    <form action="">
                        <h1>Welcome to Tripiter</h1>
                        {error ? (
                            <h2
                                style={{ color: "red" }}
                                className="alert- error"
                            >
                                Error
                            </h2>
                        ) : (
                            ""
                        )}
                        <div className="inputs">
                            <div className="form-element">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    id="email"
                                    ref={emailRef}
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-element">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    id="password"
                                    ref={passwordRef}
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                        <button onClick={handleLogin}>Continue</button>
                        <h4>or</h4>
                        <button>Continue with Google</button>
                    </form>
                    <p>
                        New here? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
            <div className="overlay"></div>
        </>
    );
}