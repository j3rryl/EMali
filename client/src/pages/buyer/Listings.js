import React from 'react'
import '../../assets/css/listings.css'

const Listings = ({coinsData}) => {
  return (
    <div className='crypto_list'>
      {coinsData.map((coin, index) => {
          return (
              <CryptoCard
                  key={index}
                  image={coin.image}
                  name={coin.name}
                  price={coin.current_price}
              />
          );
      })}
        </div>
  )
}

export default Listings