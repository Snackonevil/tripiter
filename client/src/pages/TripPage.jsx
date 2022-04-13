import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useParams } from 'react-router-dom'
import { HiPlus } from 'react-icons/hi'

import AddHighlight from '../components/AddHighlight'
import Highlight from '../components/Highlight'
import Spinner from '../components/Spinner'

import { useQuery } from '@apollo/client'
import { QUERY_TRIP, QUERY_ME } from '../utils/queries'

import Auth from '../utils/auth'

import avatar from '../images/user-placeholder.png'

export default function TripBoard() {
    const [toggleModal, setToggleModal] = useState(false)
    const { currentUser } = useAuth()
    const { tripId } = useParams()

    /* const userData = Auth.getProfile()
  const currentUserId = userData.data._id */

    const { loading, data } = useQuery(QUERY_TRIP, {
        variables: {
            tripId: tripId,
        },
    })
    /* const userTrip = data.userId  */

    console.log(data)
    console.log(tripId)

    const trip = data?.trip || {}
    const highlights = trip.highlights || []
    const tripName = trip.name
    const tripDesc = trip.description

    function handleClick(e) {
        e.preventDefault()
        setToggleModal(!toggleModal)
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="parent">
            <div className="user-info">
                <img className="trip-image"src={`${trip.img_url}`} alt="trip-pic" />
                <div className="trip-info">
                  <h1 className="tripName">{tripName}</h1>
                  <p className="desc">{tripDesc}</p>
                </div>
            </div>
            <div className="filter">
                <h1>## Highlights</h1>
            </div>
            <div className="trip-board">
                {highlights.map((highlight) => {
                    return (
                        <Highlight key={highlight._id} highlight={highlight} />
                    )
                })}
            </div>
            {toggleModal && (
                <AddHighlight
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                />
            )}
            <div className="filter d-flex justify-content-end align-items-end fixed-bottom">
                <button className="addHiglight" onClick={handleClick}>
                    <HiPlus />
                </button>
            </div>
        </div>
    )
}
