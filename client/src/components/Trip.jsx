import React from 'react';



export default function Trip( { trip } ) {
  return (
    <div className="trip">
                <img src={require(`../images/${trip.img_src}`)} alt="trip-thumbnail" />
                <div className="title">{trip.title}</div>
    </div>
  )
}