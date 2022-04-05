import { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import avatar from "../images/user-placeholder.png";
import AddTrip from '../components/AddTrip';
import Trip from '../components/Trip';
import trips from "../utils/trips";
import { HiPlus } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
//search for react #20
// Form to create trip
// Ability to create trip
// Use src picture for picture
// Add search bar but // out

export default function Dashboard ({ handlePageChage }) {
    return(
    <div className = "parent">
        <div className="user-info">
            <img src={avatar} alt="avatar" />
            <h1>FirstName LastName</h1>
        </div>
        <div className="filter">
            <h1>Trips</h1>
        </div>
    <main className="trip-board">
        {trips.map((trip) => {
         return <Trip key = {trip.id} trip = {trip} />
    })}
            <div className="filter d-flex justify-content-end align-items-end fixed-bottom">
            <button className="addTrip"><HiPlus /></button>
        </div>
</main>

</div>

)}

// let navigate = useNavigate();
// const routeChange = () => {
//     let path = 'newPath';
//     navigate(path);
// }
