import React from 'react'
import { FiPhoneCall } from "react-icons/fi"
import { TfiEmail } from 'react-icons/tfi'

export const Footer = () => {
  return (
    <div className='text-stone-200 bg-stone-500 text-sm h-10 mt-10 flex items-center justify-center'>
    <div className='mx-5 flex justify-between w-full'> 
    <div>
          <a href="mailto:linda.lottiger@gmail.com" className='md:block hidden'>Email: linda.lottiger@gmail.com</a> {/* Gör e-postadressen klickbar här */}
          <TfiEmail className='md:hidden block h-6 w-6 text-stone-200' /> {/* Visa ikonen på mindre skärmar */}
        </div>
        <div>
          <p className=''>LINDA LÖTTIGER</p>
        </div>
        <div>
          <a href="tel:+46768256943" className='md:block hidden'>Phone: +46{' '}76{' '}825{' '}6943</a> {/* Gör telefonnumret klickbart här */}
          <FiPhoneCall className='md:hidden block h-6 w-6 text-stone-200' /> {/* Visa ikonen på mindre skärmar */}
        </div>
      </div>
    </div>
  )
}
