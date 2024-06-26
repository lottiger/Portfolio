

import React from 'react'
import { useSwipeable } from 'react-swipeable'
import event1 from '../images/event1.png'
import event2 from '../images/event2.png'
import event3 from '../images/event3.png'
import event4 from '../images/event4.png'
import cms1 from '../images/cms1.png'
import cms2 from '../images/cms2.png'
import cms3 from '../images/cms3.png'
import cms4 from '../images/cms4.png'
import image1 from '../images/eCommerce1.png'
import image2 from '../images/eCommerce2.png'
import image3 from '../images/eCommerce3.png'
import image4 from '../images/eCommerce4.png'
import image5 from '../images/eCommerce5.png'
import todo from '../images/todo.png'
import todo1 from '../images/todo1.png'
import todo2 from '../images/todo2.png'
import webshop1 from '../images/webshop1.png'
import webshop2 from '../images/webshop2.png'
import webshop3 from '../images/webshop3.png'
import webshop4 from '../images/webshop4.png'
import figma1 from '../images/figma1.png'
import figma2 from '../images/figma2.png'
import { Project } from '../components/Project'

export const Projects = () => {
  const handlers = useSwipeable({
   
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const projects = [
    {
      id: 1,
      title: 'Event',
      description: 'An event page with a corresponding CMS project (see below). Filter events by date and location, view your own bookings, and cancel them. Built with Next.js and Clerk.dev for authentication.',
      images: [event1, event2, event3, event4],
      frontendLink: 'https://github.com/lottiger/event',
    },
    {
      id: 2,
      title: 'CMS',
      description: 'A headless CMS project connected to the event project (see above). CRUD functionalities for events and the home page. There is also the possibility to manage admin functions, such as making a user an administrator and vice versa. Built with Next.js, Convex, and Clerk.',
      images: [cms1, cms2, cms3, cms4],
      fullstackLink: 'https://github.com/lottiger/cms',
     
    },
    {
      id: 3,
      title: 'E-commerce',
      description: 'A project assigned from school. Follow through a purchase as a guest or by registration. As logged in you have the possibility to view order history.',
      images: [image1, image2, image3, image4, image5],
      frontendLink: 'https://github.com/lottiger/eCommerce',
      backendLink: 'https://github.com/lottiger/eCommerceAPI',
    },
    {
      id: 4,
      title: 'Todo',
      description: 'The first project with JS. A classic to do list with functions like add, delete, cross out and validation.',
      images: [todo, todo1, todo2],
      frontendLink: 'https://github.com/lottiger/Todo',
      backendLink: 'https://github.com/lottiger/todoAPI',
    },
    {
      id: 5,
      title: 'Webshop',
      description: 'One of my first assigned projects in school with HTML and SCSS. Learning how to handle images, simple layouts, and responsive design.',
      images: [webshop1,webshop3, webshop2, webshop4],
      frontendLink: 'https://github.com/lottiger/webshop'
    },
    {
      id: 6,
      title: 'Soup delivery UX',
      description: 'A project in Figma where I designed a soup delivery service. The goal was to create a user-friendly and easy-to-use interface. All based on the user inerview and requests.',
      images: [figma1,figma2],
      prototypeLink: 'https://www.figma.com/file/YzAI80yJediuf4QNc755Em/Untitled?type=design&node-id=1%3A3&mode=design&t=P4BflGlB5ZP0uoWt-1'
    }
  ];

  return (
  
    <div {...handlers}>
      {projects.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </div>

  )
};






