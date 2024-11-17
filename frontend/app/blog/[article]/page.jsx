import ArticleComponent from '@/app/_components/Blog/ArticleComponent';
import ArticleIntro from '@/app/_components/Blog/ArticleIntro';
import ArticleOverview from '@/app/_components/Blog/ArticleOverview';
import FeaturedItems from '@/app/_components/FeaturedItems/FeaturedItems';
import { fetchDataFromStrapi } from '@/utils/strapi.utils'

export default async function BlogDetail({ params }) {
    const { article: slug } = await params;
    const articles = await fetchDataFromStrapi("/blog-articles?populate[0]=articleContent&populate[1]=featuredImage&populate[2]=articleContent.image")
    const article = articles.find((article) => article.slug === slug)
    return (
        <main>
            <ArticleIntro article={article} />
            <section className='article-section'>
                <ArticleOverview article={article} />
                {
                    article.articleContent.map(content => (
                        <ArticleComponent key={content.id} articleContent={content} />
                    ))

                }
            </section>
            <FeaturedItems headline={"Explore Our Other Articles"} items={articles} />
        </main>
    )
}

export const revalidate = 300;