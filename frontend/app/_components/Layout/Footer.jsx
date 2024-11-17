import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const navItems = [
        {
            display: "the camp.",
            slug: ""
        },
        {
            display: "the experience.",
            slug: "experience"
        },
        {
            display: "the blog.",
            slug: "blog"
        },
        {
            display: "the events.",
            slug: "events"
        }
    ]

    const policies = [
        {
            display: "Imprint",
            slug: "/imprint"
        },
        {
            display: "Terms and Conditions",
            slug: "/tac"
        },
        {
            display: "Data Protection",
            slug: "/data-protection"
        }
    ]
    return (
        <footer className='footer'>
            <nav className='footer__nav'>
                <Image className="footer__logo" src="/assets/logo.svg" alt="alt" width={100} height={100} />
                <ul className='footer__links'>
                    {
                        navItems.map(item => (
                            <li key={item.slug}>
                                <Link href={item.slug}>
                                    <h5>{item.display}</h5>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className="footer__policies">
                <ul className='footer__policies-nav'>
                    {
                        policies.map(policy => (
                            <li key={policy.slug}>
                                <p className='copy'>
                                    {policy.display}
                                </p>
                            </li>
                        ))
                    }
                </ul>
                <p className="copy">
                    © Gokhan’s Surfcamp - all rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer