"use client"
import React, { useEffect, useState } from 'react'
import FeaturedArticle from './FeaturedArticle'

const FeaturedItems = ({ headline, items }) => {

    const [itemNumber, setItemNumber] = useState(3);
    const onShowMore = () => {
        setItemNumber(items.length % 3 !== 0 && itemNumber + 3 > items.length ? itemNumber - items.length % 3 + 3 : itemNumber + 3)
    }
    const onShowLess = () => {
        setItemNumber(itemNumber % 3 !== 0 ? itemNumber - itemNumber % 3 - 3 : itemNumber - 3)
    }

    useEffect(() => {
        if (itemNumber > items.length) {
            setItemNumber(items.length % 3 === 0 ? items.length : itemNumber - items.length % 3)
        } else if (items.length % 3 !== 0 && itemNumber > items.length) {
            setItemNumber(itemNumber - (items.length % 3))
        }
    }, [itemNumber])

    return (
        <section className='featured-items'>
            <h3 className='featured-items__headline'>{headline || "Our featured articles"}</h3>
            <div className="featured-items__container">
                {
                    items.slice(0, itemNumber).map(item => {
                        return (
                            !item.isHighlightArticle && <FeaturedArticle key={item.slug} article={item} />
                        )
                    })
                }

                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>{
                    itemNumber < items.length && <button className='btn btn--medium btn--turquoise' onClick={onShowMore}>Show more</button>}
                </div>

                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>{
                    itemNumber >= items.length && <button className='btn btn--medium btn--turquoise' onClick={onShowLess}>Show less</button>
                }
                </div>

            </div>
        </section>
    )
}

export default FeaturedItems