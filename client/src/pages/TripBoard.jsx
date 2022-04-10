import React from 'react'
import AddHighlight from '../components/AddHighlight'
import Highlight from '../components/Highlight'
import avatar from "../images/user-placeholder.png"
import highlights from "../utils/highlightsData"
import { useState, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi'


export default function TripBoard () {
  const [toggleModal, setToggleModal] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setToggleModal(!toggleModal)
  }

  return (
    <div className="parent">
      <div className="user-info">
            <img src={avatar} alt="avatar" />
            <h1>TRIP NAME</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                debitis aliquam, nesciunt quidem error asperiores labore veniam?
                Consectetur dicta provident, aliquam porro inventore quidem
                voluptatem doloribus quisquam optio natus quibusdam?
            </p>
        </div>
        <div className="filter">
            <h1>## Highlights</h1>
        </div>
        <div className="trip-board">
            {highlights.map((highlight)=>{
              return <Highlight key={highlight.id} highlight={highlight} />
            })}
        </div>
        {toggleModal && <AddHighlight toggleModal={toggleModal} setToggleModal={setToggleModal}/>}
        <div className="filter d-flex justify-content-end align-items-end fixed-bottom">
            <button className="addHiglight" onClick={handleClick}><HiPlus /></button>
        </div>
    </div>
  )
}
