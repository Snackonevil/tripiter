import React from 'react'


export default function Highlight( { highlight } ) {
  return (
    <div className="trip">
                <img src={require(`../images/${highlight.img_src}`)} alt="trip-thumbnail" />
                <div className="title">{highlight.title}</div>
    </div>
  )
}
