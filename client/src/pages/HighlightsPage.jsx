import React from 'react'
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const highlights = () => {
    return (
        <div>
            <div class="highlight-img">
                <img src="#" alt="Highlight Image" />
            </div>
            <div class="description-box">
                <h1 class="highlight-title">Highlight Title</h1>
                    <h2 class="publish-date">Published on this date.</h2>
                    {/* For this part, consider putting their name/username and profile picture */}
                    <h2 class="user-name">Username</h2>
                        <p class="highlight-description">Insert your description here.</p>
            </div>
        </div>
    )
};

export default highlights;