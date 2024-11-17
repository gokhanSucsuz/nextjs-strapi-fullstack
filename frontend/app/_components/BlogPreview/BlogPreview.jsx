import { fetchDataFromStrapi } from '@/utils/strapi.utils'
import React from 'react'
import HighlightArticle from '../Blog/HighlightArticle'
import ArticleIntro from '../Blog/ArticleIntro'
import BlogPreviewItem from './BlogPreviewItem'

const BlogPreview = async () => {
    const data = await fetchDataFromStrapi("/blog-articles?populate[0]=articleContent&populate[1]=featuredImage&populate[2]=articleContent.image")
    const hightLightArticle = data.find(item => item.isHighlightArticle === true)
    const recentlyPublishedArticles = data.filter(article => !article.isHighlightArticle).slice(0, 3)
    const displayArticles = [hightLightArticle, ...recentlyPublishedArticles]
    console.log(displayArticles)
    return (
        <div className='blog-preview'>
            <h2 className="blog-preveiw__headline">the blog.</h2>
            <div className="blog-preview__container">
                {displayArticles.map(article => (
                    <BlogPreviewItem key={article.id} article={article} />
                ))}
            </div>
        </div >
    )
}

export default BlogPreview