import Image from "next/image";

const HighlightArticle = async ({ data }) => {

    return (
        <>
            <article className="highlight-article">
                <div className="highlight-article__info">
                    <h3>{data.headline}</h3>
                    <p className="copy">{
                        data.excerpt
                    }</p>
                </div>
                <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.featuredImage.url}` || "/assets/hero-experience.png"} alt="alt" width={1000} height={1000} className="highlight-article__image" />
            </article>
        </>
    );
}

export default HighlightArticle