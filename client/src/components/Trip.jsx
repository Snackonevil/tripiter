import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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

    return (
        <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            className="trip"
            onClick={handleClick}
        >
            <img src={trip.img_url} alt="trip-thumbnail" />
            <h4 style={{ fontSize: '1.75rem', textAlign: 'center' }}>
                {trip.name}
            </h4>
            <p style={{ color: 'lightgray', textAlign: 'center' }}>
                {trip.highlights.length} highlights
            </p>
        </motion.div>
    )
}
