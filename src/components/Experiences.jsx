import React from 'react'
import { Experience } from '../components/Experience'

export const Experiences = () => {

    const experiencesData = [
    {

      id: 1,
      title: 'Diningroom Manager/Sommelier/Event manager',
      company: 'Emmer at Ulriksdals Värdshus, a part os Svenska Brasserier',
      date: '2018 - 2023',
      skills:['Communication','Leadership','Recruitment', 'Economics', 'Service','Eventplanning'],
      description: 'A very diverse and fun job that changes shape over time due to the organizations ideas and goals combined with my own personal development.'
    },
    {
        id: 2,
        title:'Psychotherapist',
        company:'self-owned company',
        date:'2018-',
        skills:['Emathy', 'Comunication', 'Cognitive behavioral therapy', 'Mindfulness'],
        description:'Coaching and therapeutic sessions independently for individuals and businesses. Due to Covid-19, the business has been put on hold.'

    },
    {
        id: 3,
        title:'Waitress',
        company:'Sturehof, Svenska Brasserier',
        date:'2017-2018',
        skills:['Teamwork','Sstress-resistant','Communication'],
        description:'A joyfull time. Worked concurrently with studies'
    },
    {
        id: 4,
        title:'Chef',
        company:'Nybrogatan 38, Bockholmen Gruppen',
        date:'2014-1017',
        skills:['Cooking','Teamwork','Stress-resistant','Creativity','Time management','Economics'],
        description:'Primarily responsible for the restaurants mice an place. Worked concurrently with studies.'
    },
    {
        id: 5,
        title:'Chef/head chef',
        company:'Bistro Berns, Berns group',
        date:'2012-2014',
        skills:['Cooking','Teamwork','Stress-resistant','Creativity','Time management','Economics'],
        description:'A small team with great freedom under responsibility and creativity.'
    }


]
  return (
    <div>
    {experiencesData.map(exp => (
        <Experience key={exp.id} {...exp} />
    ))}
</div>

  )
}
