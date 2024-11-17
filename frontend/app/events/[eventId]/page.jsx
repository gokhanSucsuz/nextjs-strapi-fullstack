import React from 'react'
import SignupForm from '../../_components/Events/SignupForm'
import { fetchDataFromStrapi } from '@/utils/strapi.utils';
import FeaturedEvents from '@/app/_components/Events/FeaturedEvents';

const EventDetail = async ({ params }) => {
    const { eventId } = await params;
    console.log(typeof eventId)
    let slugs = []
    let events;
    try {
        events = await fetchDataFromStrapi("/events?populate=*")
        slugs = events.map(event =>
        ({
            documentId: String(event.documentId)
        })
        )

    } catch (error) {
        console.log("Error fetching slugs for events!", error)
    }
    const singleEvent = events.find(event => String(event.documentId) === eventId)


    const infoText = (
        <>
            {singleEvent.description.map((item, index) =>
                <p key={index} className="copy">
                    {item.children[0].text}
                </p>
            ).filter(item => item.text !== "")}
        </>)
    const prices = {
        "sharedPrice": singleEvent.sharedPrice,
        "singlePrice": singleEvent.singlePrice
    }
    console.log("event id", singleEvent.documentId)
    return (
        <main className='events-page'>
            <SignupForm infoText={infoText} headline={singleEvent.name} prices={prices} eventId={singleEvent.documentId} />
            <FeaturedEvents events={events} />

        </main>
    )
}

export default EventDetail