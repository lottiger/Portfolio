

import React from 'react';
import { useSwipeable } from 'react-swipeable';
import image1 from '../images/eCommerce1.png';
import image2 from '../images/eCommerce2.png';
import image3 from '../images/eCommerce3.png';
import image4 from '../images/eCommerce4.png';
import image5 from '../images/eCommerce5.png';
import todo from '../images/todo.png';
import todo1 from '../images/todo1.png';
import todo2 from '../images/todo2.png';
import webshop1 from '../images/webshop1.png';
import webshop2 from '../images/webshop2.png';
import webshop3 from '../images/webshop3.png';
import webshop4 from '../images/webshop4.png';
import { Project } from '../components/Project';

export const Projects = () => {
  const handlers = useSwipeable({
   
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const projects = [
    {
      id: 1,
      title: 'E-commerce',
      description: 'A project assigned from school. Follow through a purchase as a guest or by registration. As logged in you have the possibility to view order history.',
      images: [image1, image2, image3, image4, image5],
      frontendLink: 'https://github.com/lottiger/eCommerce',
      backendLink: 'https://github.com/lottiger/eCommerceAPI',
    },
    {
      id: 2,
      title: 'Todo',
      description: 'The first assigned project with JS. A classic to do list with functions like add, delete, cross out and validation.',
      images: [todo, todo1, todo2],
      frontendLink: 'https://github.com/lottiger/Todo',
      backendLink: 'https://github.com/lottiger/todoAPI',
    },
    {
      id: 3,
      title: 'Webshop',
      description: 'One of my first assigned projects in school with HTML and SCSS. Learning how to handle images, simple layouts, and responsive design.',
      images: [webshop1,webshop3, webshop2, webshop4],
      frontendLink: 'https://github.com/lottiger/webshop'
    },
  ];

  return (
  
    <div {...handlers}>
      {projects.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </div>

  )
};





