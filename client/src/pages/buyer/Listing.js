import React from 'react'
import '../../assets/css/listing.css'

const Listing = ({ image, name, price }) => {
  return (
    <div className='card'>
      <div className='card_image'>
          <img src={image} alt='' />
      </div>
      <div className='card_info'>
          <h2>{name}</h2>
          <h3>${price.toLocaleString()}</h3>
      </div>
      </div>
  )
}

export default Listing