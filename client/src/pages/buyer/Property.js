import React, { useEffect, useState } from 'react'
import '../../assets/css/property.css'
import { useLocation, useNavigate} from "react-router-dom";
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'




const Property = () => {
   const navigate = useNavigate()
   const sendInquiry=()=>{
      toast.success("Inquiry Sent Successfuly.")

   }
   const makepayment=()=>{
      navigate("/payment")
   }
   const [property, setProperty] = useState([])
   const [inquiry, setInquiry] = useState()

   const location = useLocation()
   const thePath = location.pathname
   const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)
    useEffect(() => {
        async function fetchData(){
            const  response =  await axios.get(
                `http://localhost:3001/api/property/${lastItem}`
            );
            console.log(response.data)
            setProperty(response.data);

        }
        fetchData()
        // const response = fetchData()
        // console.log(response.data)
        

    }, []);
  return (
    <>
    
    <section className="view-property !capitalize">

   <div className="details">
      <div className="thumb">
      {/* <div className="big-image">
            <img src="images/house-img-1.webp" alt=""/>
         </div>
         <div className="small-images">
            <img src="images/house-img-1.webp" alt=""/>
            <img src="images/hall-img-1.webp" alt=""/>
            <img src="images/kitchen-img-1.webp" alt=""/>
            <img src="images/bathroom-img-1.webp" alt=""/>
         </div> */}
         
        <div className="big-image">
        {/* <img src={ process.env.PUBLIC_URL`/uploads/${property.image_01}`} /> */}
        <img src={`/uploads/${property.image_01}`} alt='' />

         </div>
         <div className="small-images">
         <img src={`/uploads/${property.image_01}`} alt='' />
         <img src={`/uploads/${property.image_02}`} alt='' />
         <img src={`/uploads/${property.image_03}`} alt='' />

            
         </div>
         
      </div>
      <h3 className="name">{property.property_name}</h3>
      <p className="location"><i className="fas fa-map-marker-alt"></i><span>{property.address}</span></p>
      <div className="info">
         <p><i className="fas fa-tag"></i><span>15 lac</span></p>
         <p><i className="fas fa-user"></i><span>john deo (owner)</span></p>
         <p><i className="fas fa-building"></i><span>{property.type}</span></p>
         <p><i className="fas fa-house"></i><span>{property.offer}</span></p>
         <p><i className="fas fa-calendar"></i><span>{property.creation_time}</span></p>
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
            <p><i>carpet area :</i><span>750sqft</span></p>
            <p><i>age :</i><span>3 years</span></p>
            <p><i>room floor :</i><span>3</span></p>
            <p><i>total floors :</i><span>22</span></p>
            <p><i>furnished :</i><span>semi-furnished</span></p>
            <p><i>loan :</i><span>available</span></p>
         </div>
      </div>
      <h3 className="title">amenities</h3>
      <div className="flex">
         <div className="box">
            <p><i className="fas fa-check"></i><span>lifts</span></p>
            <p><i className="fas fa-check"></i><span>security guards</span></p>
            <p><i className="fas fa-times"></i><span>play ground</span></p>
            <p><i className="fas fa-check"></i><span>gardens</span></p>
            <p><i className="fas fa-check"></i><span>water supply</span></p>
            <p><i className="fas fa-check"></i><span>power backup</span></p>
         </div>
         <div className="box">
            <p><i className="fas fa-check"></i><span>parking area</span></p>
            <p><i className="fas fa-times"></i><span>gym</span></p>
            <p><i className="fas fa-check"></i><span>shopping mall</span></p>
            <p><i className="fas fa-check"></i><span>hospital</span></p>
            <p><i className="fas fa-check"></i><span>schools</span></p>
            <p><i className="fas fa-check"></i><span>market area</span></p>
         </div>
      </div>
      <h3 className="title">description</h3>
      <p className="description">{property.description}</p>
      {/* <form action="" method="post" className='flex justify-between'>
         <button onClick={sendInquiry} className='inline-btn'>Send Inquiry</button>
         <button className='inline-btn'>Buy Property</button>

      </form> */}
      <div className='register-form-control-container w-full'>
        <br/><br/>
        <textarea placeholder="Make Inquiry" className="tarea w-full" rows="4" cols="50">
         </textarea>
        {/* <input value={inquiry} 
        placeholder="Make Inquiry"
        onChange={(e)=>setInquiry(e.target.value)}
        type="textarea" name='inquiry'/> */}
        </div>
      <div className='flex justify-between'>
         <button onClick={sendInquiry} className='inline-btn'>Send Inquiry</button>

      </div>
      <div className='flex justify-between'>
         <button onClick={sendInquiry} className='inline-btn'>Proceed To Purchase</button>
         <button onClick={makepayment} className='inline-btn'>Terminate Process</button>

      </div>
      <ToastContainer />
   </div>

</section>

    
    </>
  )
}

export default Property