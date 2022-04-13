import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useRef } from "react";
import { useMutation } from '@apollo/client';
import UploadImage from './UploadImage'
import ProgressBar from './ProgressBar'
import { ADD_HIGHLIGHT } from '../utils/mutations';

import Auth from '../utils/auth';
import { QUERY_TRIPS } from '../utils/queries';
import { QUERY_HIGHLIGHTS } from '../utils/queries';
//put state for logged in user

export default function AddHighlight({ toggleModal, setToggleModal }){
      const { tripId }  = useParams(); 
      console.log(tripId)
      const [name, setName] = useState('');
      const [location, setLocation] = useState('');
      const [description, setDescription] = useState('');
      const [img_url, setImgUrl]= useState('/placeholder.png');

      const [ addHighlight, { error }] =useMutation(ADD_HIGHLIGHT);

      const handleFormSubmit = async (event) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        event.preventDefault();

        if (!token) {
          return false;
        }

        try {
          const { data } = await addHighlight({
            variables: { 
             highlight: {
                tripId,
                name,
                description,
                location,
                description,
                img_url
             }
          }
        });
          window.location.reload();
        } catch (err) {
          console.error(err)
        }
      }

      function handleClick(e) {
       /*  e.preventDefault();
        e.stopPropagation(); */
        console.log(e.currentTarget.className)
        if (e.target === e.currentTarget) {
            setToggleModal(!toggleModal)
        }
    }

      return (
    <div id="create-highlight-modal" style={{position:"fixed"}}className="form-container" onClick={handleClick}>
      <h1>Create Highlight</h1>
    <form 
    id= "highlight" // onSubmit={handleFormSubmit}
    >
      <div className="inputs">
            <div className="form-element">
                <label htmlFor="highlight-name">Highlight Name</label>
                <input
                    className="highlight-name"
                    id="highlight-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-element">
                <label htmlFor="highlight-description">Description</label>
                <input
                    name="highlight-description"
                    id="highlight-description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            <div className="form-element">
                <label htmlFor="highlight-location">Location</label>
                <input
                    name="highlight-location"
                    id="highlight-location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
            </div>
            <div className="img-upload">
              <UploadImage img_url={img_url} setImgUrl={setImgUrl}/>
            </div>
            </div>
        <button onClick={handleFormSubmit}>Create Highlight</button>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
    </form>
</div>
  )
}
