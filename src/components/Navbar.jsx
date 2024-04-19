import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"


export const Navbar = () => {
  return (
    <div className='text-stone-200 flex justify-between items-center p-8 mb-20'>
        <h1 className='text-xl'>LINDA LÖTTIGER</h1>
        <div className='flex text-3xl gap-3'>
        <FaLinkedin/>
        <FaGithub/>
        </div>
      
    </div>
  )
}
