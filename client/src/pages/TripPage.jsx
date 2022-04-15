import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { HiPlus } from 'react-icons/hi'

import AddHighlight from '../components/AddHighlight'
import HighlightItem from '../components/HighlightItem'
import Spinner from '../components/Spinner'

import PrivateComponent from '../components/PrivateComponent'

import { useQuery } from '@apollo/client'
import { QUERY_TRIP } from '../utils/queries'

export default function TripBoard() {
    const [toggleModal, setToggleModal] = useState(false)
    const { tripId } = useParams()

    const { loading, data } = useQuery(QUERY_TRIP, {
        fetchPolicy: 'no-cache',
        variables: {
            tripId: tripId,
        },
    })

    const trip = data?.trip || {}
    const highlights = trip.highlights || []
    const tripName = trip.name
    const tripDesc = trip.description
    const ownerId = trip.userId

    function handleClick(e) {
        e.preventDefault()
        setToggleModal(!toggleModal)
    }

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="parent">
                <div className="header-container">
                    <img
                        className="trip-image"
                        src={`${trip.img_url}`}
                        alt="trip-pic"
                    />
                    <div className="trip-info">
                        <h1 className="tripName">{tripName}</h1>
                        <p className="desc">{tripDesc}</p>
                    </div>
                </div>
                <div className="filter">
                    <h1>{highlights.length} Highlights</h1>
                </div>
                <div className="board">
                    {highlights.map((highlight) => {
                        return (
                            <HighlightItem
                                key={highlight._id}
                                highlight={highlight}
                                ownerId={ownerId}
                            />
                        )
                    })}
                </div>
                {toggleModal && (
                    <AddHighlight
                        toggleModal={toggleModal}
                        setToggleModal={setToggleModal}
                    />
                )}
                <PrivateComponent ownerId={trip.userId}>
                    <div className="filter d-flex justify-content-end align-items-end fixed-bottom">
                        <button
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            className="addHiglight"
                            onClick={handleClick}
                        >
                            <HiPlus />
                        </button>
                    </div>
                </PrivateComponent>
            </div>
        )
    }
}
