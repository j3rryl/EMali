import React, { useEffect, useState } from 'react'

const Saved = () => {
  
  const [loggedIn,setLoggedIn]  = useState(window.localStorage.getItem("isLoggedIn"))
  useEffect(()=>{
    setLoggedIn(loggedIn)
  },[loggedIn])
  
  return (
    <>
    {loggedIn? (
    <div>Saved Items</div>
  ):(<div>Please Log In to View / Save Items</div>)}
    </>
    // <div>Saved</div>
  )
}

export default Saved