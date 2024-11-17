import Image from 'next/image'
import React from 'react'

const InfoBlock = ({ data }) => {
    return (
        <>
            {
                data.map((item) => {
                    const { headline, text, imageUrl, reversed, button } = item
                    return <div key={item.imageUrl} className={`info ${reversed ? "info--reversed" : ""}`}>
                        <Image
                            className='info__image' src={imageUrl ? imageUrl : "/assets/hero-experience.png?"} alt='' width={2000} height={2000} />
                        <div className="info__text">
                            <h2 className="info__headline">{headline}</h2>
                            {text.map((t, index) =>
                                (<span key={index}>{t.children[0].text} <br /></span>)

                            )}
                            {button}
                        </div>
                    </div>
                })
            }
        </>

    )
}

export default InfoBlock