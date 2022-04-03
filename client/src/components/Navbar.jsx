import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { currentUser } = useAuth();
    return (
        <div className="">
            <nav>
                <img src="/tripiter.png" alt="tripiter-logo" />
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>{currentUser ? <a href="#">Log Out</a> : ""}</li>
                </ul>
            </nav>
        </div>
    );
}
