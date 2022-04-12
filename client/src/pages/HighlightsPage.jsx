import React from 'react'
// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";

const highlights = () => {
    return (
        <div className='container'>
            <div className="highlight-img">
                <img src="#" alt="Highlight Image" />
            </div>
            <div className="description-box">
                <h1 className="highlight-title">Highlight Title</h1>
                    <h2 className='location'>Location</h2>
                        <h4 className="publish-date">Published on this date.</h4>
                    {/* For this part, consider putting their name/username and profile picture */}
                        <h4 className="user-name">Username</h4>
                            <p className="highlight-description">Insert your description here.</p>
            </div>
        </div>
    )
};

export default highlights;