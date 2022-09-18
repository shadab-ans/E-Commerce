import React from 'react'
import './Card.css'

const RecentlyCard = ({cat, title, imgSrc, price, rating}) => {
    return (
        <>
           
                    <div className="ShopCard2">
                            <div id="ShopCard-catogery"> {cat} </div>
                            <a href="#title"> {title} </a>
                            <div className="ShopCard-img"> <img width="100%" src={imgSrc} alt=""/> </div>
                            <div className="ShopCard-bottom">
                                <span id="ShopCard-price">${price}</span>
                                <span id="ShopCard-rating">{rating}rating</span>
                            </div>
                    </div>
                  
        </>
    )
}

export default RecentlyCard
