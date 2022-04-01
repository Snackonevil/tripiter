import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();

    function handleLogin(e) {
        e.preventDefault();
        login(emailRef.current.value, passwordRef.current.value);
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
                        <div className="inputs">
                            <div className="form-element">
                                <label htmlFor="trip-name">Email</label>
                                <input
                                    name="trip-name"
                                    id="trip-name"
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
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <button onClick={handleLogin}>Continue</button>
                        <h4>or</h4>
                        <button>Continue with Google</button>
                    </form>
                    <p>New here? Sign Up</p>
                </div>
            </div>
            <div className="overlay"></div>
        </>
    );
}
