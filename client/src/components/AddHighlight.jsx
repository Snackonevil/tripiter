import React from 'react'
import { useState, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi'


export default function AddHighlight({ toggleModal, setToggleModal }){

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.currentTarget.className)
    if (e.target === e.currentTarget){
    setToggleModal(!toggleModal)
    }
  }

  return (
    <>
        <div id='add-highlight-modal'className='form-container' onClick={handleClick}>
          <form className= 'form'>
            <h1> Add Highlight </h1>
            <div className="inputs">
              <div className="form-element">
                <label>Highlight Title</label>
                <input className="highlight" type="text" placeholder='Title' />
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
        
    </>
  )
}
