import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'


export default function Highlight( { highlight } ) {
  return (
    <div className="trip">
                <img src={`${highlight.img_url}`} alt="trip-thumbnail" />
                <div className="title">{highlight.name}</div>
                <button className="addHiglight"><FiSettings /></button>
                <button className="addHiglight"><HiOutlineTrash /></button>
    </div>
    
  )
}
