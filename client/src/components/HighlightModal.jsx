
   
import React from 'react'
import { QUERY_HIGHLIGHTS } from '../utils/queries'
import highlights from '../utils/trips';
// import highlightImage from '../images/placeholder'
// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";

const HighlightModal = ({ highlight, toggleModal, setToggleModal }) => {

    function handleClick(e) {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            setToggleModal(!toggleModal)
        }
    }

    return (
        
        <div className="freeze-panel" onClick={handleClick}>
            <div className='box'>
                <div className="contents">
                    <div className="highlight-img">
                        <img className="modal-img"src ={highlight.img_url} alt="Highlight Image" />
                    </div>
                    <div className="description-box container">
                        <h1 className="highlight-title">{highlight.name}</h1>
                {/* <h1 className="highlight-title">{highlight.name}</h1> */}
                        <h2 className='location'>{highlight.location}</h2>
                        {/* <h4 className="publish-date">Published on this date.</h4> */}
                    {/* For this part, consider putting their name/username and profile picture */}
                        {/* <h4 className="user-name">Username</h4> */}
                        <p className="highlight-description">{highlight.description}</p>
                    </div>
                </div>
            {/* <a href="#" className='btn'>Back</a> */}
            </div>
        </div>
    )
};

export default HighlightModal;