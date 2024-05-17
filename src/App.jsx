import React from 'react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ToggleContent } from './components/ToggleContent'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Projects } from './components/Projects'
import { AboutMe } from './components/AboutMe'
import { SkillIcons } from './components/SkillIcons'
import { Contact } from './components/Contact'
import { MessageForm } from './components/MessageForm'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className='overflow-auto max-h-screen bg-gradient-to-b from-black to-stone-500'>
      <Navbar />
      <Contact />
      <Hero />
      <SkillIcons />

      <ToggleContent title='Profile'>
        <AboutMe />
      </ToggleContent>
      
      <ToggleContent title='Projects'>
        <Projects />
      </ToggleContent>

      <ToggleContent title='Education'>
        <Education />
      </ToggleContent>

      <ToggleContent title='Experiences'>
        <Experiences />
      </ToggleContent>

      <MessageForm />

      <Footer />
    </div>
  )
}