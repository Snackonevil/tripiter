import React from 'react';


export default function AddTrip(){
  return (
    
    <div id="create-trip-modal" className="form-container">
    <form action="">
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
        <button>Create</button>
    </form>
</div>
  )
}