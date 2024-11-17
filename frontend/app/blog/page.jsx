import HighlightArticle from '../_components/Blog/HighlightArticle'
import { fetchDataFromStrapi, processInfoBlocks } from '@/utils/strapi.utils';
import SubscribeToNewsletter from '../_components/Blog/SubscribeToNewsletter';
import FeaturedItems from '../_components/FeaturedItems/FeaturedItems';


const BlogPage = async () => {
  const featuredArticles = await fetchDataFromStrapi("/blog-articles?populate[0]=articleContent&populate[1]=featuredImage")

  const highlightArticle = featuredArticles.find(item => item.isHighlightArticle === true ?? "")

  const articles = featuredArticles.filter(item => item.isHighlightArticle !== true)

  return (
    <main className='blog-page'>
      <HighlightArticle data={highlightArticle} />
      <SubscribeToNewsletter />
      <FeaturedItems items={articles} />
    </main>
  )
}

export default BlogPage

export const revalidate = 300;