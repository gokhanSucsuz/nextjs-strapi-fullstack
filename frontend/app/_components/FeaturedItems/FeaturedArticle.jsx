import { formatDate } from '@/utils/strapi.utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedArticle = ({ article }) => {
    const img = article.featuredImage?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.featuredImage.url}` : "/assets/hero-experience.png"
    return (
        <Link href={`/blog/${article.slug}`} className='featured-items__article '>
            <div className="featured-items__article-img">
                <Image src={img}
                    alt={article.headline} width={1000} height={1000} />
            </div>
            <div className="featured-items__article-text">
                <h5>{article.headline}</h5>
                <p className="copy-small">
                    {formatDate(article.date)}
                </p>
            </div>
        </Link>
    )
}

export default FeaturedArticle