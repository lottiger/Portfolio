import React from 'react'
import { FiPhoneCall } from "react-icons/fi"
import { TfiEmail } from 'react-icons/tfi'


export const Contact = () => {
  return (
    <div className='ml-3 sticky top-2'>
        <div className='mb-2'>
        <a href="tel:+768256943" className='text-stone-200 text-2xl'>
        <FiPhoneCall />
        </a>
        </div>
        <div>
           
        <a href="mailto:linda.lottiger@mail.com"  className='text-stone-200 text-2xl'>
        <TfiEmail />
        </a>
        </div>
      
    </div>
  )
}
