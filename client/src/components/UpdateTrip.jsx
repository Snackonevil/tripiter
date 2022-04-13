import React from 'react'
import { useState, useRef } from 'react'
import { useMutation } from '@apollo/client'
import UploadImage from './UploadImage'
import ProgressBar from './ProgressBar'
import { ADD_TRIP } from '../utils/mutations'
import AddHighlight from './AddHighlight'

import Auth from '../utils/auth'
import { QUERY_TRIPS } from '../utils/queries'


const UpdateTrip = ({ item: { name, destination, description, img_url, id } }) => {
    const [updateTrip, { loading }] = useMutation(UPDATE_TRIP);
  
    return (
      <TripForm
        disabled={loading}
        initialName={name}
        initialDestination={destination}
        initialDescription={description}
        initialImg_url={img_url}
        onSubmit={trip => {
          updateTrip({
            variables: {
              id,
              trip
            }
          });
        }}
       
      />
    );
  };