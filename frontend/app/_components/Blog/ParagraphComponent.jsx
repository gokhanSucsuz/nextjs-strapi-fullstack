import React from 'react'

const ParagraphComponent = ({ paragraph }) => {
    return (
        <div className="article-text-image">
            <div className="copy article-text__text article-paragraph">
                {paragraph.paragraph.map((paragraph, index) => (
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


        </div>
    )
}

export default ParagraphComponent