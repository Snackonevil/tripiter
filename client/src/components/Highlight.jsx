import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'


export default function Highlight( { highlight } ) {
  return (
    <div className="trip">
      <div className="imgWrapper">
                <img src={`${highlight.img_url}`} alt="trip-thumbnail" />
                <div className='highlightName'><p>{highlight.name}</p></div>
                <div className="edit-btns">
                  <button className="buttons"><FiSettings /></button>
                  <button className="buttons"><HiOutlineTrash /></button>
                </div>
      </div>
    </div>
    
  )
}
