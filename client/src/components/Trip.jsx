import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import TripModal from './TripModal';import React from 'react'


export default function Trip({ trip }) {
    const navigate = useNavigate()
    function handleClick(e) {
        e.preventDefault()
        navigate(`/trip/${trip._id}`)
    }
    const fadeVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    function deleteTrip(){
        var result = window.confirm("Are you sure you want to delete?");
        if (result){
          console.log('deleted')
        }
      }
    
      function updateTrip(){
        console.log('updated')
      }

    return (
        <>
        <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            className="trip"
            onClick={handleClick}
        >
                <img src={`${trip.img_url}`} alt="trip-thumbnail" />
                <div className='tripName'><p>{trip.name}</p></div>
                <div className="edit-btns">
                  <button className="buttons" onClick={updateTrip}><FiSettings /></button>
                  <button className="buttons" onClick={deleteTrip}><HiOutlineTrash /></button>
                </div>
        </motion.div>
        </>
    )
}
