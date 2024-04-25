import React from 'react';

export const Experience = ({id, title, company, date, skills, description}) => {
  return (
    <section className='mx-10 border-b border-stone-500 py-10'>
      <div className='flex gap-2 font-semibold'>
      <p>{date}</p>
      <h4 className=''>{title} </h4>
      </div>
      <div className='text-sm'>
      <p className='mb-5'>{company}</p>
      
      {skills.map((skill, index) => <p className='text' key={index}>{skill}</p>)}
      <p className='py-5'>{description}</p>
      </div>
    </section>
  )
}