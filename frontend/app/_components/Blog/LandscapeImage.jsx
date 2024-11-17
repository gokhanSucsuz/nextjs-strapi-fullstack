import Image from 'next/image'
import React from 'react'

const LandscapeImage = ({ landscapeImage }) => {
    return (
        <div className="article-image">
            <Image src={landscapeImage.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${landscapeImage.image?.url}` : "/assets/hero-experience.png"} alt="image" width={1000} height={1000} />
            <p className='article-image__caption copy-small'>{landscapeImage.imageCaption}</p>
        </div>


    )
}

export default LandscapeImage