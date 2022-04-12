import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import UploadImage from './UploadImage';
import ProgressBar from './ProgressBar'



import Auth from '../utils/auth';
import { ADD_HIGHLIGHT } from '../utils/mutations';


export default function AddHighlight({ toggleModal, setToggleModal, tripID }){

  function handleClick(e) {
    console.log(e.currentTarget.className)
    if (e.target === e.currentTarget){
    setToggleModal(!toggleModal)
    }
  }

  const [name, setName] = useState('')
  const [description, setDesc] = useState('')
  const [location, setLocation] = useState('')
  const [img_url, setImg_url]= useState('');

  const [addHighlight, { error }] =useMutation(ADD_HIGHLIGHT)

  const handleFormSubmit = async(event)=> {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
        event.preventDefault();

        if (!token) {
          return false;
        }
    
        try {
          const {data} = await addHighlight({
            variables:{
              highlight: {
                tripID,
                name, 
                description,
                location,
                img_url,
              }
            }
          })
          window.location.reload();
        } catch(err){
          console.log(err)
        }
  }

  return (
    <>
        <div id='add-highlight-modal' className='form-container' onClick={handleClick}>
          <form className='form' id="highlight-form">
            <h1> Add Highlight </h1>
            <div className="inputs">
              <div className="form-element">
                <input className="highlight" type="text" placeholder='Name' />
              </div>
              <div className="form-element">
                <textarea id='text-area' className="highlight" type="text-area" placeholder='Description' />
              </div>
              <div className="form-element">
                <input type="text" className="highlight" placeholder='Location' />
              </div>
              <div className="form-element">
                <input type="file" 
               onClick={<UploadImage/>} 
                value={img_url}
                onChange={(event) => setImg_url(event.target.value)}
               />
            </div>
            </div>
            <button type="submit" form="add-highlight">Add Highlight</button>
          </form>
        </div>
        
    </>
  )
}
