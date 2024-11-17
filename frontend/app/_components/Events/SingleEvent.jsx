import { formatDate } from '@/utils/strapi.utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleEvent = ({ event, slug }) => {
    return (
        <Link href={`/events/${slug}`} className='featured-items__article '>
            <div className="featured-items__events-header">
                <p className='copy'>
                    <strong>{event.name}</strong>
                </p>
            </div>

            <div className="featured-items__events-img">
                <Image src={event.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${event.image.url}` : "/assets/hero-experience.png"} alt="image" width={300} height={300} />
            </div>
            <div className="featured-items__article-text">
                <p className='copy-small'>{formatDate(event.startingDate)}</p>
                <p className="copy-small">Prices starting at {event.sharedPrice}€</p>
            </div>
        </Link>
    )
}

export default SingleEvent