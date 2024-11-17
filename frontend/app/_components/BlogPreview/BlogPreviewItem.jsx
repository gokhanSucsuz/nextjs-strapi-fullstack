import { formatDate } from '@/utils/strapi.utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPreviewItem = ({ article }) => {
  return (
    <Link href={`/blog/${article.slug}`} key={article.id} className='blog-preview__item'>
      <div className="blog-preview__image">
        <Image src={article.featuredImage?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.featuredImage.url}` : "/assets/hero-experience.png"} alt="image" width={1000} height={1000} />
      </div>
      <h5 className="blog-preview__headline">{article.headline}</h5>
      <p className="copy-small">{formatDate(article.publishedAt)}</p>
    </Link>
  )
}

export default BlogPreviewItem