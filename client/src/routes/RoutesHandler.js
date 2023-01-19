import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/buyer/Home'
import Listings from '../pages/buyer/Listings'
import Listing from '../pages/buyer/Listing'
import Payment from '../pages/buyer/Payment'
import Receipt from '../pages/buyer/Receipt'
import Saved from '../pages/buyer/Saved'


const RoutesHandler = () => {
    const location=useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/listings' element={<Listings />}/>
      <Route path='/listing' element={<Listing />}/>
      <Route path='/payment' element={<Payment />}/>
      <Route path='/receipt' element={<Receipt />}/>
      <Route path='/saved' element={<Saved />}/>
      {/* <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Contact />}/> */}
    </Routes>
  )
}

export default RoutesHandler