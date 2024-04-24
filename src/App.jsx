import React from 'react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ToggleContent } from './components/ToggleContent'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { AboutMe } from './components/AboutMe'
import { SkillIcons } from './components/SkillIcons'

export const App = () => {
  return (
    <div className='overflow-auto max-h-screen bg-gradient-to-b from-black to-stone-500'>
      <Navbar />
      <Hero />
      <SkillIcons />
      
      <ToggleContent title='Education'>
      <Education />
      </ToggleContent>
      <ToggleContent title='Experience'>
      <Experience />
      </ToggleContent>
      <ToggleContent title='Projects'>
        <Projects />
      </ToggleContent>
      <ToggleContent title='About me'>
        <AboutMe />
      </ToggleContent>
      
    </div>
  )
}
