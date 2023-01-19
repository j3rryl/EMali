import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../components/buyer/Navbar'
import Home from '../pages/buyer/Home'
import Listings from '../pages/buyer/Listings'
import Listing from '../pages/buyer/Listing'
import Payment from '../pages/buyer/Payment'
import Receipt from '../pages/buyer/Receipt'
import Saved from '../pages/buyer/Saved'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'


const RoutesHandler = () => {
    const location=useLocation()
  return (
    <>
    <Navbar/>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/listings' element={<Listings />}/>
      <Route path='/listing' element={<Listing />}/>
      <Route path='/payment' element={<Payment />}/>
      <Route path='/receipt' element={<Receipt />}/>
      <Route path='/saved' element={<Saved />}/>
      <Route path='/register' element={<Registration />}/>
      <Route path='/login' element={<Login />}/>
      {/* <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Contact />}/> */}
    </Routes>
    </>
  )
}

export default RoutesHandler