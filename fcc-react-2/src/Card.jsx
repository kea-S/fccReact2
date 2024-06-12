import React from 'react'

const Card = () => {
  return (
    <div className='card'>
         <img src='../assets/IMG_3675.jpg' className='card--image'/>
         <div className='card--stats'>
            <span>5.0</span>
            <span>(6),</span>
            <span>Singapore</span>
         </div>
         <p>Sheares Band Yippee</p>
         <p>From $20 / person</p>
    </div>
  )
}

export default Card