import React from 'react';
import { useState, useRef } from "react";


export default function AddTrip({ toggleModal, setToggleModal }){
    const CustomButton = ({ onPress }) => {
        return (
          <button type="button" className="addTrip" onClick={onPress}>
            Create
          </button>
        );
      }

      const handleEvent = () => {
        console.log(`I am v tired`)
      };
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
    <form id= "trip" action="">
        <h1>Create trip</h1>
        <div className="inputs">
            <div className="form-element">
                <label htmlFor="trip-name">Trip Name</label>
                <input
                    name="trip-name"
                    id="trip-name"
                    type="text"
                    required
                />
            </div>
            <div className="form-element">
                <label htmlFor="trip-description">Description</label>
                <input
                    name="trip-description"
                    id="trip-description"
                    type="text"
                    required
                />
            </div>
            <div className="form-element">
                <label htmlFor="trip-destination">Destination</label>
                <input
                    name="trip-destination"
                    id="trip-destination"
                    type="text"
                    required
                />
            </div>
        </div>
        <CustomButton onPress={handleEvent}>Create</CustomButton>
    </form>
</div>
  )
}