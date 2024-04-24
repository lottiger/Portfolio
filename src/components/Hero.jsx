import React from 'react'
import image from '../images/unnamed.jpg'

export const Hero = () => {
  return (
    <div className='flex items-center justify-center flex-col text-stone-200'>
        <p className=' text-stone-200 text-opacity-30 mb-2'>Soon to be</p>
        <img src={image} alt="Linda Löttiger" className="w-[300px] h-[300px] rounded-full object-cover border-0"/>
        <h2 className='text-4xl mt-2 mb-2 '>Front End Developer</h2>
        <p className=' text-stone-200 text-opacity-30'>Driven | Smart | Glad</p>
    </div>
  )
}
