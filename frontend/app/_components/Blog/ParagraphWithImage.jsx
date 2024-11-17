import Image from 'next/image'
import React from 'react'

const ParagraphWithImage = ({ paragraphWithImage }) => {
    console.log(paragraphWithImage)
    return (
        <div className="article-text-image">
            {
                !paragraphWithImage.imageShowsRight &&
                <div className="article-text-image__container">
                    <div className="article-text-image__image">
                        <Image src={paragraphWithImage.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${paragraphWithImage.image?.url}` : "/assets/hero-experience.png"} alt="image" width={1000} height={1000} />
                    </div>
                    <p className='article-image__caption copy-small'>{paragraphWithImage.imageCaption}</p>
                </div>
            }
            <div className="copy article-text-image__text article-paragraph">
                {paragraphWithImage.paragraph.map((paragraph, index) => (
                    <span key={index}>

                        {paragraph.type === "paragraph" && paragraph.children.map(item => item.text).filter(item => item.text !== "")}

                        {paragraph.type === "list" && (<ul>{paragraph.children.map((item, index) =>
                            <li key={index}>{item.children[0].text}</li>
                        ).filter(item =>
                            item.text !== ""
                        )}</ul>)}
                    </span>
                )
                )}
            </div>
            {
                paragraphWithImage.imageShowsRight &&
                <div className="article-text-image__container">
                    <div className="article-text-image__image">
                        <Image src={paragraphWithImage.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${paragraphWithImage.image?.url}` : "/assets/hero-experience.png"} alt="image" width={1000} height={1000} />
                    </div>
                    <p className='article-image__caption copy-small'>{paragraphWithImage.imageCaption}</p>
                </div>
            }
        </div>
    )
}

export default ParagraphWithImage