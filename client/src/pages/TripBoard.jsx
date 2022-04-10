import React from 'react'
import AddHighlight from '../components/AddHighlight'
import Highlight from '../components/Highlight'
import avatar from '../images/user-placeholder.png'

export default function TripBoard() {
    return (
        <div className="parent">
            <div className="user-info">
                <img src={avatar} alt="avatar" />
                <h1>TRIP NAME</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nam debitis aliquam, nesciunt quidem error asperiores labore
                    veniam? Consectetur dicta provident, aliquam porro inventore
                    quidem voluptatem doloribus quisquam optio natus quibusdam?
                </p>
            </div>
            <div className="filter">
                <h1>## Highlights</h1>
            </div>
            <div className="trip-board">
                {highlights.map((highlight) => {
                    return (
                        <Highlight key={highlight.id} highlight={highlight} />
                    )
                })}
            </div>
            <AddHighlight />
        </div>
    )
}
