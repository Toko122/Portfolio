import React from 'react'
import './Hero.css'
import Link from 'next/link'

const Hero = () => {
  return (

    <>
    <div className="flex justify-center items-center w-full text-white relative">
      
      <div className="flex flex-col gap-6 items-center px-4">

        <h1 className="heroH1 text-4xl md:text-5xl animated-gradient py-2 font-bold text-center bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-cyan-300 to-green-300 bg-clip-text text-transparent">
            Hi, I'm Toko Migineishvili
        </h1>

        <p className="heroPAnimation text-lg md:text-xl text-center text-gray-200 leading-relaxed max-w-[640px]">
          I build responsive, scalable and high-performance web apps using 
          <span className="text-purple-300 font-semibold"> React</span>, 
          <span className="text-red-300 font-semibold"> TailwindCss</span>, 
          <span className="text-pink-300 font-semibold"> Next.js</span>, 
          <span className="text-blue-300 font-semibold"> Node.js</span>, 
          <span className="text-green-300 font-semibold"> Express</span> and 
          <span className="text-yellow-300 font-semibold"> MongoDB</span>.
          <br />
          I enjoy solving complex problems and writing clean, maintainable code.
        </p>

        <Link href='#projects' className="heroButton px-6 cursor-pointer py-3 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:scale-105 transition-all">
          View My Projects
        </Link>
      </div>
    </div>
     
    </>
  )
}

export default Hero
