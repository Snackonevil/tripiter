import React from 'react'
import { QUERY_HIGHLIGHTS } from '../utils/queries'
// import highlightImage from '../images/placeholder'
// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";

const highlights = () => {
    return (
        <main className='box'>
            <div className="container highlight-img">
                <img src ={ QUERY_HIGHLIGHTS } alt="Highlight Image" />
            </div>
            <div className="description-box container">
                <h1 className="highlight-title">Highlight Title</h1>
                    <h2 className='location'>Location</h2>
                        <h4 className="publish-date">Published on this date.</h4>
                    {/* For this part, consider putting their name/username and profile picture */}
                        <h4 className="user-name">Username</h4>
                            <p className="highlight-description">Insert your description here.</p>
            </div>
            <a href="#" className='btn'>Back</a>
        </main>
    )
};

export default highlights;