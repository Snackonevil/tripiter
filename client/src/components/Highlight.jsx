import React from 'react'


export default function Highlight( { highlight } ) {
  return (
    <div className="trip">
                <img src={`${highlight.img_url}`} alt="trip-thumbnail" />
                <div className="title">{highlight.name}</div>
    </div>
  )
}
