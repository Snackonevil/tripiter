import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SignUpPage() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordRef2 = useRef();
    const [error, setError] = useState("");

    const { signUp, googeAuth } = useAuth();

    async function handleSignUp(e) {
        e.preventDefault();
        if (nameRef.current.value.length == 0) {
            setError("Please enter your name");
            return;
        }
        if (passwordRef.current.value !== passwordRef2.current.value) {
            setError("Password inputs do not match");
            return;
        }
        try {
            await signUp(
                nameRef.current.value,
                emailRef.current.value,
                passwordRef.current.value
            );
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleGoogle() {}
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL + `/login-background.png`
                    })`,
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
                                <label htmlFor="name">Name</label>
                                <input
                                    name="name"
                                    id="name"
                                    ref={nameRef}
                                    type="text"
                                    required
                                />
                            </div>
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
                            <div className="form-element">
                                <label htmlFor="password2">
                                    Confirm Password
                                </label>
                                <input
                                    name="password2"
                                    id="password2"
                                    ref={passwordRef2}
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                        <button onClick={handleSignUp}>Continue</button>
                        <h4>or</h4>
                        <button>Continue with Google</button>
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
