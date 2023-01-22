import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../components/buyer/Navbar'
import SellerHome from '../pages/seller/SellerHome'
import MyListings from '../pages/seller/MyListings'
import SellerPayment from '../pages/seller/SellerPayment'
import SellerProfile from '../pages/seller/SellerProfile'
import PostProperty from '../pages/seller/PostProperty'
import UpdateProperty from '../pages/seller/UpdateProperty'


import Home from '../pages/buyer/Home'
import Property from '../pages/buyer/Property'
import Listings from '../pages/buyer/Listings'
import Listing from '../pages/buyer/Listing'
import Payment from '../pages/buyer/Payment'
import Receipt from '../pages/buyer/Receipt'
import Saved from '../pages/buyer/Saved'
import Login from '../components/auth/Login'
import Properties from '../pages/buyer/Properties'
import Registration from '../components/auth/Registration'
import SellerNavbar from '../components/seller/SellerNavbar'

import ValuatorListings from '../pages/valuator/ValuatorListings'
import ValuatorHome from '../pages/valuator/ValuatorHome'
import ValuatorProfile from '../pages/valuator/ValuatorProfile'
import ValuatorNavbar from '../components/valuator/ValuatorNavbar'
import AuthLogin from '../components/authuser/AuthLogin'
import AgentHome from '../pages/agent/AgentHome'
import AgentListings from '../pages/agent/AgentListings'
import Process from '../pages/agent/Process'
import UserEnquiries from '../pages/agent/UserEnquiries'
import AgentNavbar from '../components/agent/AgentNavbar'
import AgentProfile from '../pages/agent/AgentProfile'
import MessageCard from '../pages/agent/Message/MessageCard'
import Messages from '../pages/agent/Messages'




const RoutesHandler = () => {
  const [role,setRole]  = useState(window.localStorage.getItem("role"))
  useEffect(()=>{
    setRole(role)
  },[role])
  const location=useLocation()
  const thePath = location.pathname
  const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)
    
  return (
    <>
    {(() => {
      if (role==1) {
        return (
          <Navbar/>
        )
      } else if (role==2) {
          return (
            <Navbar/>
          )
        } else if (role==3) {
          return (
            <SellerNavbar/>
          )
        } if (role==4) {
          return (
            <AgentNavbar/>
          )
        } if (role==5) {
          return (
            <ValuatorNavbar/>
          )
        } else if(lastItem=="login"){
          return (
            <h2></h2>
          )

        } else {
          return (
            <Navbar/>
          )
        }
      })()}
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/listings' element={<Listings />}/>
      <Route path='/listing' element={<Listing />}/>
      <Route path='/properties' element={<Properties />}/>
      <Route path={`/property/${lastItem}`} element={<Property />}/>
      <Route path='/payment' element={<Payment />}/>
      <Route path='/receipt' element={<Receipt />}/>
      <Route path='/saved' element={<Saved />}/>
      <Route path='/register' element={<Registration />}/>
      <Route path='/login' element={<Login />}/>

      <Route path='/authuser/login' element={<AuthLogin />}/>
      {/* <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Contact />}/> */}
      <Route path='/seller/home' element={<SellerHome />}/>
      <Route path='/seller/mylistings' element={<MyListings />}/>
      <Route path={`/seller/payment/${lastItem}`} element={<SellerPayment />}/>
      <Route path='/seller/postproperty' element={<PostProperty />}/>
      <Route path='/seller/profile' element={<SellerProfile />}/>
      <Route path={`/seller/updateproperty/${lastItem}`} element={<UpdateProperty />}/>

      <Route path={`/authuser/valuer`} element={<ValuatorHome />}/>
      <Route path={`/authuser/valuer/valuerlistings`} element={<ValuatorListings />}/>
      <Route path={`/authuser/valuer/valuerhome`} element={<ValuatorHome />}/>
      <Route path={`/authuser/valuer/valuerprofile`} element={<ValuatorProfile />}/>

      <Route path={`/authuser/agent`} element={<Messages />}/>
      <Route path={`/authuser/agent/listings`} element={<AgentListings />}/>
      <Route path={`/authuser/agent/process`} element={<Process />}/>
      <Route path={`/authuser/agent/profile`} element={<AgentProfile />}/>
      <Route path={`/authuser/agent/userenquiries/${lastItem}`} element={<UserEnquiries />}/>
      {/* <Route path={`/authuser/agent/messages`} element={<Messages />}/> */}

      <Route path={`/test`} element={<Messages />}/>
    </Routes>
    </>
  )
}

export default RoutesHandler