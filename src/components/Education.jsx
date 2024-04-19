import React from 'react'
import image from '../images/Kurser.png'

export const Education = () => {
  return (
    <>
    <section className='flex justify-center items-center flex-col py-10  mx-10'>
       <h4 >Front End Developer, KYH, Stockholm</h4>
        <p className='pb-2'>2023-2025</p>
        <img src={image} alt="kurser" className='px-10'/>
    </section>
    <section className='flex justify-center items-center flex-col py-10 border-t border-stone-500 mx-10'>
      <h4>Psykoterapi Steg 1, Humanova, Stockholm</h4>
      <p>2014-2019</p>
    </section>
    </>
  )
}
