import React from 'react'


export default function AddTrip({ handlePageChage }){
  return (
    <>
        <div className='card'>

        </div>
        <div id="create-trip-modal" className="form-container">
<form action="">
    <h1>Create trip</h1>
    <div className="inputs">
        <div className="form-element">
            <label for="trip-name">Trip Name</label>
            <input
                name="trip-name"
                id="trip-name"
                type="text"
                required
            />
        </div>
        <div className="form-element">
            <label for="trip-description">Description</label>
            <input
                name="trip-description"
                id="trip-description"
                type="text"
                required
            />
        </div>
        <div className="form-element">
            <label for="trip-destination">Destination</label>
            <input
                name="trip-destination"
                id="trip-destination"
                type="text"
                required
            />
        </div>
    </div>
    <button id= "createTrip">Create</button>
</form>
</div>
    </>
  )
}