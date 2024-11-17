import axios from "axios";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchDataFromStrapi(route) {
    const url = `${BASE_URL}/api${route}`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.log("Could not fetch data from api!", error);
        throw new Error(`Could not fetch data from ${url}!`);
    }
}

export function processInfoBlocks(data) {
    return data.info_blocks.map(item => {
        return {
            ...item,
            documentId: item.documentId,
            headline: item.headline,
            text: item.text,
            reversed: item.reversed,
            imageUrl: `${BASE_URL}${item.image.url}`,
            button: !item.button ? null : (
                <Link href={item.button.slug} className={`btn btn--medium btn--${item.button.color}`}>{item.button.text}</Link>
            )
        }
    }
    )
}

export function formatDate(dateString) {
    const date = new Date(dateString)
    const options = { weekday: "long", day: '2-digit', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('en-US', options)
}

export const generateSignupPayload = (formData, eventId) => {
    console.log("eventID API", eventId)
    if (!eventId) {
        return {
            data: {
                ...formData, isGeneralInterest: true
            }
        }
    } else {
        return {
            data: {
                ...formData,
                event: {
                    connect: [eventId]
                }
            }
        }
    }
}