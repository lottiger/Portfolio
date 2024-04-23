import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { SlClose } from "react-icons/sl"

export const ToggleContent = ({ title, children }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className='text-stone-200 flex-col gap-7 justify-center items-center mt-10'>
        <div className='flex justify-between items-center w-full px-10'>
          <h3 className='text-xl' onClick={() => setShowInfo(!showInfo)}>{title}</h3>
          <div className={`transform transition-transform duration-700 ${showInfo ? 'rotate-180' : ''}`}>
            <IoIosArrowDown className='text-xl' onClick={() => setShowInfo(!showInfo)}/>
          </div>
        </div>
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showInfo ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
          {children}
          {showInfo && 
            <div className='flex justify-end w-full px-10'>
              <div className={`transform transition-transform duration-700 rotate-180`}>
                <SlClose className='text-[1.7rem] shadow-md rounded bg-red-700 p-1' onClick={() => setShowInfo(false)} color="stone-200"/>
              </div>
            </div>
          }
        </div>
    </div>
  )
}