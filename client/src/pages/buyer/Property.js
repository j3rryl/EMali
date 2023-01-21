import React, { useEffect, useState } from 'react'
import '../../assets/css/property.css'
import { useLocation, useNavigate} from "react-router-dom";
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendar, faHouse, faTag, faUser, faCheck, faTimes, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';




const Property = () => {
   const navigate = useNavigate()
   
   const makepayment=()=>{
      navigate("/payment")
   }
   const [property, setProperty] = useState([])
   const [saved, setSaved] = useState([])
   const [user, setUserData] = useState([])
   const [inquiry, setInquiry] = useState()
   const [feedback, setFeedback] = useState([])

   const user_id = window.localStorage.getItem("token")
   const location = useLocation()
   const thePath = location.pathname
   const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)

    useEffect(() => {
      async function fetchUserData(){
         const  response =  await axios.get(
             `http://localhost:3001/api/user/${user_id}`
         );
         // console.log(response.data)
         setUserData(response.data);
     }
     async function fetchSaved(){
      const  response =  await axios.get(
          `http://localhost:3001/api/property/findsaved/${lastItem}`
      );
      console.log(response.data)
      setSaved(response.data);
  }


     async function fetchFeedback(){
      const  response =  await axios.get(
          `http://localhost:3001/api/feedback/${user_id}`,{
               property_id:property.property_id,
          }
      )
      setFeedback(response.data)
  }
        async function fetchData(){
            const  response =  await axios.get(
                `http://localhost:3001/api/property/${lastItem}`
            );
            // console.log(response.data)
            setProperty(response.data);
        }
        fetchData()
        fetchUserData()
        fetchFeedback()
        fetchSaved()
    }, []);
    function makeEnquiry(inquiry){
      setInquiry(inquiry)
  }
  useEffect(()=>{
    const abortCont=new AbortController();
    makeEnquiry(inquiry,{signal:abortCont.signal})
    return()=>{
      abortCont.abort()
    }
  },[inquiry])

    const sendInquiry=(property_id)=>{
      if(!user_id){
         toast.warning("Sign In to send inquiries.")
      } else {
         try{
            axios.post("http://localhost:3001/api/enquiry/makeenquiry",{
            message:inquiry,
            user_id:user_id,
            property_id:property_id
          })
          toast.success("Enquiry Sent Successfuly.")
          } catch (err){
            toast.error("Enquiry Unsuccessful.")
          }
      }
   }

   const saveProperty=(property_id)=>{
      if(!user_id){
         toast.warning("Sign In to send inquiries.")
      } else {
         if(saved=="nothing"){
            try{
               axios.post("http://localhost:3001/api/property/saveproperty",{
               user_id:user_id,
               property_id:property_id
             })
             setTimeout(()=>{
               window.location.reload()
             },2000)
             toast.success("Property Saved.")
             } catch (err){
               toast.error("Error.")
             }
         } else {
            try{
               axios.delete(`http://localhost:3001/api/property/deletesaved/${lastItem}`,{
             })
             setTimeout(()=>{
               window.location.reload()
             },2000)
             
             toast.success("Property Removed from Saved.")
             } catch (err){
               toast.error("Error.")
             }
         }
         
      }

   }


  return (
    <>
    <section className="view-property !capitalize">

   <div className="details">
      <div className="thumb">
        <div className="big-image">
        <img src={`/uploads/${property.image_01}`} alt='' />
         </div>
         <div className="small-images">
         <img src={`/uploads/${property.image_01}`} alt='' />
         <img src={`/uploads/${property.image_02}`} alt='' />
         <img src={`/uploads/${property.image_03}`} alt='' />
         </div>
         
      </div>
      <h3 className="name">{property.property_name}</h3>
      <p className="location"><FontAwesomeIcon icon={faMapMarkerAlt}/><span>{property.address}</span></p>
      <div className="info">
         <p><FontAwesomeIcon icon={faTag}/><span>15 lac</span></p>
         <p><FontAwesomeIcon icon={faUser}/><span>{property.first_name} (owner)</span></p>
         <p><FontAwesomeIcon icon={faBuilding}/><span>{property.type}</span></p>
         <p><FontAwesomeIcon icon={faHouse}/><span>{property.offer}</span></p>
         <p><FontAwesomeIcon icon={faCalendar}/><span>{property.creation_time}</span></p>
      </div>
      <h3 className="title">details</h3>
      <div className="flex">
         <div className="box">
            <p><i>rooms :</i><span>2 BHK</span></p>
            <p><i>deposit amount :</i><span>{property.deposite}</span></p>
            <p><i>status :</i><span>{property.status}</span></p>
            <p><i>bedroom :</i><span>{property.bedroom}</span></p>
            <p><i>bathroom :</i><span>{property.bathroom}</span></p>
            <p><i>balcony :</i><span>{property.balcony}</span></p>
         </div>
         <div className="box">
            <p><i>carpet area :</i><span>{property.carpet_area} sqft</span></p>
            <p><i>age :</i><span>{property.age} years</span></p>
            <p><i>total floors :</i><span>{property.total_floors}</span></p>
            <p><i>furnished :</i><span>{property.furnished}</span></p>
         </div>
      </div>
      <h3 className="title">amenities</h3>
      <div className="flex">
         <div className="box">
            <p>{property.lift=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>lifts</span></p>
            <p>{property.security_guard=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>security guards</span></p>
            <p>{property.play_ground=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>play ground</span></p>
            <p>{property.garden=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>gardens</span></p>
            <p>{property.water_supply=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>water supply</span></p>
            <p>{property.power_backup=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>power backup</span></p>
         </div>
         <div className="box">
            <p>{property.parking_area=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>parking area</span></p>
            <p>{property.gym=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>gym</span></p>
            <p>{property.shopping_mall=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>shopping mall</span></p>
            <p>{property.hospital=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>hospital</span></p>
            <p>{property.school=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>schools</span></p>
            <p>{property.market_area=="yes"?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
               <span>market area</span></p>
         </div>
      </div>
      <h3 className="title">description</h3>
      <p className="description">{property.description}</p>
      
      <div className='register-form-control-container w-full'>
        <br/><br/>
        <textarea onChange={(e)=>setInquiry(e.target.value)} placeholder="Make Inquiry" className="tarea w-full" rows="4" cols="50">
         </textarea>
        
        </div>
      <div className='flex justify-between'>
         <button onClick={()=>sendInquiry(property.property_id)} className='inline-btn'>Send Inquiry</button>
         <button onClick={()=>saveProperty(property.property_id)} className='inline-btn'>
            {saved=='nothing'?<p>Save Property</p>:<p>Remove Saved</p>}
         </button>

      </div>
      <div className='flex justify-between'>
         {feedback?<h2>{feedback.f_message}</h2>:<h2>No feedback yet.</h2>}
      </div>
      <div className='flex justify-between'>
         <button className='inline-btn'>Proceed To Purchase</button>
         <button onClick={makepayment} className='inline-btn'>Terminate Process</button>

      </div>
      <ToastContainer />
   </div>

</section>

    
    </>
  )
}

export default Property