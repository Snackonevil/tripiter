import React from 'react';
import { useState, useRef } from "react";
import { useMutation } from '@apollo/client';
import UploadImage from './UploadImage'
import ProgressBar from './ProgressBar'
import { ADD_TRIP } from '../utils/mutations';

// import Auth from '../utils/auth';


export default function AddTrip({ toggleModal, setToggleModal }){
    const CustomButton = ({ onPress }) => {
        return (
          <button type="button" className="addTrip" onClick={onPress}>
            Create
          </button>
        );
      }
      const [name, setName] = useState('');
      const [destination, setDestination] = useState('');
      const [description, setDescription] = useState('');
      const [img_url, setImg_url]= useState('');

      const [ addTrip, { error }] =useMutation(ADD_TRIP);
      const handleFormSubmit = async (event) => {
        try {
          const { data } = await addTrip({
            variables: { name },
            variables: { destination },
            variables: { description },
            variables: { img_url },
          });
          window.location.reload();
        } catch (err) {
          console.error(err)
        }
      }

      function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.currentTarget.className)
        if (e.target === e.currentTarget){
        setToggleModal(!toggleModal)
        }
    }
      return (
    <div id="create-trip-modal" className="form-container" onClick={handleClick}>
    <form id= "trip" action="" onSubmit={handleFormSubmit}>
        <h1>Create trip</h1>
        <div className="inputs">
            <div className="form-element">
                <label htmlFor="trip-name">Trip Name</label>
                <input
                    className="trip-name"
                    id="trip-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-element">
                <label htmlFor="trip-description">Description</label>
                <input
                    name="trip-description"
                    id="trip-description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            <div className="form-element">
                <label htmlFor="trip-destination">Destination</label>
                <input
                    name="trip-destination"
                    id="trip-destination"
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                />
            </div>
            <div className="form-element">
              <UploadImage />
              <label>
                <input type="file" onClick={<UploadImage />} />
                <span>+</span>
            </label>
            </div>
            </div>
        <CustomButton type="submit">Create</CustomButton>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
    </form>
</div>
  )
}