import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"



export const Navbar = () => {
  return (
    <div className='text-stone-200 flex justify-between items-center p-8 mb-5 mx-5'>

      
        <h1 className='text-xl'>LINDA LÖTTIGER</h1>
        <div className='flex text-3xl gap-3'>
        <a href="https://www.linkedin.com/in/linda-l%C3%B6ttiger-678867223/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/lottiger" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        </div>
      
    </div>
  )
}
