import React from 'react'
import image1 from '../images/eCommerce1.png'
import image2 from '../images/eCommerce2.png'
import image3 from '../images/eCommerce3.png'
import image4 from '../images/eCommerce4.png'
import image5 from '../images/eCommerce5.png'

export const Projects = () => {
  return (
    <div>
        <section className='flex justify-center items-center flex-col py-10 mx-10'>
            <h4 >E-commerce</h4>
            <p className='text-xs mt-1'>A project assigned from school. Follow through a purchase as a guest or by registration. As logged in you have the possibility to view order history.</p>
            <div className='gap-2 mt-5 py-2 flex overflow-x-auto scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent scrollbar-thumb-rounded'>
                <img src={image1} alt="eCommerce" />
                <img src={image2} alt="eCommerce" />
                <img src={image3} alt="eCommerce" />
                <img src={image4} alt="eCommerce" />
                <img src={image5} alt="eCommerce" />
            </div>
            <a href="https://github.com/lottiger/eCommerce" target='_blank' rel="noopener noreferrer"className='text-xs mt-5'>Ecommerce on Github</a>
            <a href="https://github.com/lottiger/eCommerceAPI" target='_blank' rel="noopener noreferrer"className='text-xs'>Ecommerce REST API on Github</a>

        </section>
        <section className='flex justify-center items-center flex-col py-10 border-t border-stone-500 mx-10'>
          <h4>Todo</h4>
          <p></p>

        </section>
    </div>
  )
}