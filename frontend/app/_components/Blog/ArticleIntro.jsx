import { formatDate } from '@/utils/strapi.utils'
import Image from 'next/image'
import React from 'react'

const ArticleIntro = ({ article }) => {
    return (
        <div className='article-intro'>
            <div className="article-intro__background">
                <Image src={article.featuredImage?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.featuredImage.url}` : "/assets/hero-experience.png"} alt="alt" fill />
            </div>
            <h3 className="article-intro__headline">
                {article.headline}
            </h3>
            <p className="copy-small bold">{formatDate(article.publishedAt)}</p>
            <p className="copy-small">
                {article.author}
            </p>


        </div>
    )
}

export default ArticleIntro