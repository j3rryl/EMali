import axios from 'axios'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import '../../../assets/css/listings.css'
import Chat from './Chat'

const Chats = ({enquiries}) => {
      return (
        <>
        <h2 className=' text-center text-2xl mb-8'>Send Feedback</h2>
        <div className='chat_list'>
          {enquiries.map((property, index,getProperty) => {
            
              return (
                  <Chat
                      key={index}
                      enquiry_id={property.enquiry_id}
                      property_id={property.property_id}
                      image={property.image_01}
                      name={property.property_name}
                      first_name = {property.first_name}
                      last_name={property.last_name}
                      e_message={property.e_message}
                      f_message={property.f_message}
                      creation_time={property.creation_time}
                      getProperty={getProperty}
    
                  />
              );
          })}
          <ToastContainer />
            </div>
            <div className=' !m-auto flex justify-evenly !mt-12 login-form-control-container'>
            <input className='!w-96'
            placeholder="Send feedback"
            type="text" name='text'/>
            
            <input type="submit" value="Send" name='login-btn' className='login-btn'/>
            </div>

            </>
      )
}

export default Chats