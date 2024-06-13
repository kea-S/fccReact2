import React from 'react'

const Card = ({ img, rating, reviewCount, country, title, price, openSpots }) => {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (country === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={img} className='card--image' />
            <div className='card--stats'>
                <span>{rating}</span>
                <span>({reviewCount}),</span>
                <span>{country}</span>
            </div>
            <p>{title}</p>
            <p>From ${price} / person</p>
        </div>
    )
}

export default Card