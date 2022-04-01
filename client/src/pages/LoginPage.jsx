import React from "react";

export default function LoginPage() {
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
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-element">
                                <label htmlFor="trip-description">
                                    Password
                                </label>
                                <input
                                    name="trip-description"
                                    id="trip-description"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <button>Continue</button>
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
