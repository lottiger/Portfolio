import React from 'react';

export const Experience = ({id, title, company, date, skills, description}) => {
  return (
    <section>
      <h4>{title}</h4>
      <p>{company}</p>
      <p>{date}</p>
      {skills.map((skill, index) => <p key={index}>{skill}</p>)}
      <p>{description}</p>
    </section>
  )
}