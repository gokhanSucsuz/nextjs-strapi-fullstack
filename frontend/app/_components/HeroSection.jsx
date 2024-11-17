import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = ({ imgSrc, headline, theme = "turquoise" }) => {
    return (
        <section className='hero'>
            <div className="hero__background">
                <Image src={imgSrc || "/assets/hero-home.png"} alt='' fill />
            </div>
            <div className={`hero__headline hero__headline--${theme}`}>
                {headline}
            </div>
            <button className={`btn btn--medium btn--${theme}`}><Link href="/events">BOOK NOW</Link></button>
            <Image src="/assets/logo.svg" alt="alt" width={100} height={100} className={`hero__logo hero__logo--${theme}`} />
        </section>
    )
}

export default HeroSection