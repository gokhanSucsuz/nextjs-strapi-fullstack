"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname = usePathname()
    const navItems = [
        {
            display: "the camp",
            slug: "/"
        },
        {
            display: "the experience",
            slug: "experience"
        },
        {
            display: "the blog",
            slug: "blog"
        },
    ]
    return (
        <header className={`header ${pathname === "/experience" ? "header--light" : ""}`}>
            <Image className='header__logo' src="/assets/logo.svg" alt="logo" width={100} height={100} />
            <ul className='header__nav '>
                {
                    navItems.map((item) => (
                        <li key={item.slug}>
                            <Link href={item.slug}><h5>{item.display}</h5></Link></li>
                    ))
                }
            </ul>
            <Link href='/events'>
                <button className='btn btn--black btn--small'>BOOK NOW</button>
            </Link>
        </header>
    )
}

export default Header