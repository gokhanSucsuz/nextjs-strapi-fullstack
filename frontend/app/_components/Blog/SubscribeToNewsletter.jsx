"use client"
import axios from 'axios'
import React, { useState } from 'react'
const SubscribeToNewsletter = () => {
    const [email, setEmail] = useState("")
    const [hasSignedUp, setHasSignedUp] = useState(false)
    const [showError, setShowError] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const post = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletter-signups`, {
                data: { email },
                headers: {
                    "Content-Type": "application/json",
                },
            })
            setHasSignedUp(true)
        } catch (error) {
            setShowError(true)
        }
    }
    return (

        <section className='newsletter'>
            {
                showError ? <h4 style={{ color: "red" }} className="newsletter__info">Something went wrong, please try again.</h4>
                    :
                    hasSignedUp ? (
                        <h4 className="newsletter__thanks" > Thank you for signing up for our newsletter!</h4>
                    ) : <>
                        <div className="newsletter__info">
                            <h4>Subscribe to our newsletter</h4>
                            <p className="copy">Unlock Exclusive Insights and Stay In the Know – Subscribe to Our Newsletter Today to always stay in touch</p>
                        </div>
                        <form className="newsletter__form" onSubmit={onSubmit} >
                            <input type="email" placeholder="Enter your E-mail address" className="newsletter__email input" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <button type='submit' className="newsletter__subscribe btn btn--medium btn--turquoise">SUBSCRIBE</button>
                        </form>
                    </>
            }

        </section>
    )
}

export default SubscribeToNewsletter