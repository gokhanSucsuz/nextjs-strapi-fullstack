"use client"
import React, { useEffect, useState } from 'react'
import SingleEvent from './SingleEvent'

const FeaturedEvents = ({ events }) => {
    console.log("events", events)

    const [itemNumber, setItemNumber] = useState(3);
    const onShowMore = () => {
        setItemNumber(events.length % 3 !== 0 && itemNumber + 3 > events.length ? itemNumber - events.length % 3 + 3 : itemNumber + 3)
    }
    const onShowLess = () => {
        setItemNumber(itemNumber % 3 !== 0 ? itemNumber - itemNumber % 3 - 3 : itemNumber - 3)
    }

    useEffect(() => {
        if (itemNumber > events.length) {
            setItemNumber(events.length % 3 === 0 ? events.length : itemNumber - events.length % 3)
        } else if (events.length % 3 !== 0 && itemNumber > events.length) {
            setItemNumber(itemNumber - (events.length % 3))
        }
    }, [itemNumber])


    return (
        <section className='featured-items'>
            <h3 className='featured-items__headline'>{events.name || "Our featured articles"}</h3>
            <div className="featured-items__container">
                {events.slice(0, itemNumber).map(event => (
                    <SingleEvent key={event.id} event={event} slug={event.documentId} />
                ))}

                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>{
                    itemNumber < events.length && <button className='btn btn--medium btn--turquoise' onClick={onShowMore}>Show more</button>}
                </div>

                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>{
                    itemNumber >= events.length && <button className='btn btn--medium btn--turquoise' onClick={onShowLess}>Show less</button>
                }
                </div>
            </div>
        </section>

    )
}

export default FeaturedEvents