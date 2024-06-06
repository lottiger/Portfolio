import React from 'react'
import terapeut from '../images/terapeut.jpg'
import par from '../images/par.jpg'
import coach from '../images/coach.jpg'
import betyg2 from '../images/Betyg2.png'

export const Education = () => {
  return (
    <>
    <section className='flex justify-center items-center flex-col py-10  mx-10 border-b border-stone-500'>
       <h4 >Front End Developer, KYH, Stockholm</h4>
        <p className='pb-2'>2023-2025</p>
        <div className='mx-10 max-h-[700px] max-w-[600px]'>
        <img src={betyg2} alt="kurser" />
        </div>
    </section>
    <section className='flex justify-center items-center flex-col py-10 border-b my-5 border-stone-500 mx-10'>
      <h4>Integrative psychotherapy Step 1, Humanova, Stockholm</h4>
      <p>2014-2019</p>
      <div className='flex overflow-x-auto scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent py-3 gap-3 mx-10 max-h-[700px] max-w-[600px]'>
      <img src={terapeut} alt="terapi" />
      <img src={coach} alt="coaching" />
      <img src={par} alt="parterapi" />
      </div>
    </section>
    </>
  )
}
