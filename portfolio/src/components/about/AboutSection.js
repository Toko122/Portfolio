import React from 'react'
import './About.css'

const AboutSection = () => {
  return (
    <div id='about' className='about flex flex-col gap-8 items-center px-4'>
      
      <div className='text-white text-4xl font-bold text-center'>
         About Me
      </div>

      <div className='border border-gray-700 rounded-2xl bg-[#1f1f1f] p-8 flex flex-col gap-6 items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-[800px]'>
        
        <p className='text-gray-200 text-lg md:text-xl leading-relaxed text-center'>
          I am a dedicated Full-Stack Developer who recently completed a <span className="font-semibold text-purple-400">9-month intensive course at Cyber Academy</span>.  
          During this time, I worked on multiple personal and collaborative projects, gaining practical experience in web development and project management.  
          I am eager to apply my skills in real-world environments and contribute to meaningful projects.  
          My focus is on learning continuously, solving challenges creatively, and improving my professional abilities, even as I start gaining industry experience.  
          I am passionate about growth and excited to take on opportunities where I can make a positive impact as a developer.
        </p>

        <a
          href='/TokoResume.pdf'
          download='TokoResume.pdf'
          className='bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md hover:shadow-xl'
        >
          Download CV
        </a>

      </div>

    </div>
  )
}

export default AboutSection