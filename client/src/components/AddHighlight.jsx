import React from 'react'
import UploadImage from './UploadImage';
import { useState } from 'react'



export default function AddHighlight({ toggleModal, setToggleModal }){

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.currentTarget.className)
    if (e.target === e.currentTarget){
    setToggleModal(!toggleModal)
    }
  }

  const [img_url, setImg_url]= useState('');


  return (
    <>
        <div id='add-highlight-modal' className='form-container' onClick={handleClick}>
          <form className='form' id="highlight-form">
            <h1> Add Highlight </h1>
            <div className="inputs">
              <div className="form-element">
                {/* <label>Highlight Title</label> */}
                <input className="highlight" type="text" placeholder='Title' />
              </div>
              <div className="form-element">
                {/* <label>Description</label> */}
                <textarea id='text-area' className="highlight" type="text-area" placeholder='Description' />
              </div>
              <div className="form-element">
                {/* <label>Location</label> */}
                <input type="text" className="highlight" placeholder='Location' />
              </div>
              <div className="form-element">
                <input type="file"
                  onClick= {<UploadImage/>}
                  value={img_url}
                  onChange={(event) => setImg_url(event.target.value)}/>
              </div>
            </div>
            <div>
            <button type="submit" form="add-highlight">Add Highlight</button>
            </div>
          </form>
          {/* <UploadImage /> */}
          {/* <button type="submit" form="add-highlight">Add Highlight</button> */}
        </div>
        
    </>
  )
}
