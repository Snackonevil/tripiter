import React from 'react'
import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import UploadImage from './UploadImage'
import { UPDATE_USER } from '../utils/mutations'

import Auth from '..utils/auth'

export default function UpdateProfile({
  toggleUserModal,
  setUserModal,
  userId,
  refetch,
}) {
  const [username, setUsername] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [picture, setPicture] = useState('./placeholder.png')

  const [editProfile, { error }] = useMutation(UPDATE_USER)
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const token = Auth.LoggedIn() ? Auth.getToken() : null
    if (!token) {
      return false
    }
    try {
      const { data } = await editProfile({
        variables: {
          users: {
            userId,
            username,
            first_name,
            last_name,
            picture,
          },
        },
      })
      setUserModal(!toggleUserModal)
      refetch()
    } catch (err) {
      console.error(err)
    }
  }

  function handleClick(e) {
    console.log(e.currentTarget.className)
    if (e.target === e.currentTarget) {
      setUserModal(!toggleUserModal)
    }
  }

  return (
    <div
      id="create-user-modal"
      className="form-container"
      onClick={ handleClick }
      style={{ position: 'fixed' }}
    >
      <h1 style={{ color: 'white' }}>Edit Your Profile</h1>
      <form id="user">
        <div id="inputs">
          <div className="form-element">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              className="user-name" 
              id="user-name" 
              value={username} 
              onChnage={(event) => setUsername(event.target.value)} 
            />
          </div>
          <div className="form-element">
            <label htmlFor="firstname">First Name</label>
            <input 
              type="text" 
              className="first-name" 
              id="first-name" 
              value={firstname} 
              onChnage={(event) => setFirstName(event.target.value)} 
            />
          </div>
          <div className="form-element">
            <label htmlFor="lastname">Last Name</label>
            <input 
              type="text" 
              className="last-name" 
              id="last-name" 
              value={lastname} 
              onChnage={(event) => setLastName(event.target.value)} 
            />
          </div>
          <div className="form-element">
            <UploadImage img_url={ img_url } setImgUrl={ setPicture } />
          </div>
        </div>
        <button onClick={ handleFormSubmit }>Update</button>
          { error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              Something went wrong...
            </div>
          )}
      </form>
    </div>
  )
}

// export default UpdateProfile