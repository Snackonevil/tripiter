import React from 'react'

export default function Trip({ trip }) {
    return (
        <>
            <div className="trip">
                <img src={trip.img_url} alt="trip-thumbnail" />
                <h4 style={{ fontSize: '1.5rem', textAlign: 'center' }}>
                    {trip.name}
                </h4>
            </div>
        </>
    )
}
