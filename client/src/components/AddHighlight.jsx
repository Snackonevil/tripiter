import React from 'react'
import { useState, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi'


export default function AddHighlight(){
  const [toggleModal, setToggleModal] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setToggleModal(!toggleModal)
  }

  return (
    <>
        <div id='add-highlight-modal'className='form-container'>
          <form className= 'form'>
            <h1> Add Highlight </h1>
            <div className="inputs">
              <div className="form-element">
                <label>Highlight Title</label>
                <input id="highlight" type="text" placeholder='Title' />
              </div>
              <div className="form-element">
                <label>Description</label>
                <input id='text-area' type="text-area" placeholder='Text' />
              </div>
              <div className="form-element">
                <label>Link</label>
                <input type="text" placeholder='Link' />
              </div>
              <div className="form-element">
                <label>Upload Picture</label>
                <input type="text" placeholder='Picture' />
              </div>
            </div>
            <button type="button">Add Highlight</button>
          </form>
        </div>
        <div className="filter d-flex justify-content-end align-items-end fixed-bottom">
            <button className="addHiglight" onClick={handleClick}><HiPlus /></button>
        </div>
    </>
  )
}
