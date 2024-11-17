"use client"
import React, { useEffect, useState } from 'react'
import TextInput from '../TextInput'
import axios from 'axios';
import { validateFormElements } from '@/utils/formValidate';
import { generateSignupPayload } from '@/utils/strapi.utils';

const SignupForm = ({ infoText, headline, buttonLabel, prices, eventId = null }) => {
    const [formData, setFormData] = useState({
        firstName: 'Gökhan',
        lastName: 'Suçsuz',
        email: 'coolpisces22@gmail.com',
        phone: '05547201903',
    });
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        } else if (error) {
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }, [success, error])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const payload = generateSignupPayload(formData, eventId)

        if (validateFormElements(formData)) {
            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`, payload
                )
                if (res.status) {
                    setSuccess(true)
                    setFormData({
                        firstName: 'Gökhan',
                        lastName: 'Suçsuz',
                        email: 'coolpisces22@gmail.com',
                        phone: '05547201903',
                    })
                    return success
                }
            } catch (error) {
                setError(error.response?.data?.error?.message || "Something went wrong, please try again.")
            }
        } else {
            setError("Please fill out all fields")
        }

    }
    return (
        <>

            <section className='signup-form'>
                <div className="signup-form__info">
                    <h4 className='signup-form__headline'>{headline}</h4>
                    {infoText}
                </div>
                <form className='signup-form__form' onSubmit={handleSubmitForm}>
                    <div className="signup-form__name-container">
                        <TextInput
                            inputName="firstName"
                            value={formData.firstName}
                            handleChange={handleChange}
                            label="First Name"
                        />
                        <TextInput
                            inputName="lastName"
                            value={formData.lastName}
                            handleChange={handleChange}
                            label="Last Name"
                        />
                    </div>
                    <TextInput
                        inputName="email"
                        value={formData.email}
                        handleChange={handleChange}
                        label="Email"
                    />
                    <TextInput
                        inputName="phone"
                        value={formData.phone}
                        handleChange={handleChange}
                        label="Your Telefon Number"
                    />
                    {success && <h4 className='copy' style={{ textAlign: "center", color: "green" }}>Thank you for signing up for event!</h4>}
                    {error && <h4 className='copy' style={{ textAlign: "center", color: "red" }}>{error}</h4>}
                    <button className='btn btn--medium btn--text btn--turquoise' type='submit'>
                        {buttonLabel || "Stay in touch!"}
                    </button>
                    {
                        prices && <div className="signup-form__pricing">
                            <h3>Pricing</h3>
                            <p className="copy signup-form__pricing">Single Room: <strong>{prices.singlePrice}€ per person</strong></p><p className="copy signup-form__pricing">Shared Room: <strong>{prices.sharedPrice}€ per person</strong></p>
                        </div>
                    }
                </form>

            </section>

        </>

    )
}

export default SignupForm