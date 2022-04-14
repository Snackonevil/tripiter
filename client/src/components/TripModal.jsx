
   
import React from 'react'
import { QUERY_TRIPS } from '../utils/queries'
import trips from '../utils/trips';
// import tripImage from '../images/placeholder'
// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";

const TripModal = ({ trip, toggleModal, setToggleModal }) => {
    return (
        <div className="freeze-panel">
            <div className='box'>
                <div className="contents">
                    <div className="highlight-img">
                        <img className="modal-img"src ={trip.img_url} alt="Highlight Image" />
                    </div>
                    <div className="description-box container">
                        <h1 className="trip-title">{trip.name}</h1>
                {/* <h1 className="highlight-title">{highlight.name}</h1> */}
                        <h2 className='location'>{trip.location}</h2>
                        {/* <h4 className="publish-date">Published on this date.</h4> */}
                    {/* For this part, consider putting their name/username and profile picture */}
                        {/* <h4 className="user-name">Username</h4> */}
                        <p className="trip-description">{trip.description}</p>
                    </div>
                </div>
            {/* <a href="#" className='btn'>Back</a> */}
            </div>
        </div>
    )
};

export default TripModal;