'use client'

import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const ProjectSection = () => {

     const projects = [
        {name: 'Blog', image: '/Screenshot 2025-11-29 133837.png', link: 'https://nextblog-ten-chi.vercel.app/', time: '11.25.2025', description: 'Modern blogging platform where users can create and publish posts with a clean and minimal UI.'},
        {name: 'Advanced-Ecommerace', image: '/Screenshot 2025-12-16 151034.png', link: 'https://advanced-ecommerce-ruby.vercel.app/', time: '11.25.2025', description: 'Modern full-stack e-commerce app with dynamic products, cart system, and responsive UI built for real-world scalability.'},
        {name: 'Ecommerce', image: '/Screenshot 2025-11-29 133720.png', link: 'https://ecommerce-nine-beige-73.vercel.app/', time: '08.11.2025', description: 'Fully functional eCommerce website with product listings, cart management, and an intuitive shopping experience.'},
        {name: 'Ecommerce 2', image: '/Screenshot 2025-11-29 134417.png', link: 'https://next-buy-eight.vercel.app/', time: '10.2.2025', description: 'Advanced eCommerce platform designed with improved UI/UX, category filtering, and smooth product browsing.'},
        {name: 'MedCenter', image: '/Screenshot 2025-11-29 233148.png', link: 'https://med-center-react.vercel.app/', time: '03.27.2025', description: 'A fully frontend-built medical clinic platform featuring a clean and responsive UI. The interface includes service listings, doctor sections, and a smooth appointment booking flow — all implemented purely on the client side without backend logic. Designed with modern styling, intuitive navigation, and an optimized user experience across devices.'},
        {name: 'ChatApp', image: '/Screenshot 2026-01-05 171059.png', link: 'https://chat-app-six-liard-14.vercel.app/', time: '01.05.2026', description: 'Full-Stack Real-Time Chat App with Socket.IO & TypeScript'},
     ]

     const router = useRouter()

  return (
    <div id='projects' className='flex items-center justify-center w-full z-0 overflow-x-hidden'>
        <div className='flex flex-col gap-12 items-center'>
             <h1 className='text-white text-4xl font-semibold'>My Projects</h1>

             <div className='flex flex-wrap justify-center gap-6'>
                   {
                    projects.map((project) => (
                        <motion.div
                         key={project.name}
                         initial={{opacity: 0, x: 50}}
                         whileInView={{opacity: 1, x: 0}}
                         transition={{duration: 0.5, ease: 'easeInOut'}}
                         onClick={() => {window.open(project.link, '_blank')}}
                         className='rounded-lg z-10 cursor-pointer hover:-translate-y-6 transition duration-400 bg-[#212121] flex flex-col gap-4 max-w-[300px] pb-4'>
                             <div className='w-full flex flex-col gap-2'>
                                <img src={project.image} className='w-full rounded-lg' />
                                <p className='text-gray-300 text-[13px] text-left px-2'>CreatedAt: {project.time}</p>
                             </div>
                             <div className='flex flex-col gap-3 items-center px-4 py-3'>
                                   <h1 className='text-white text-2xl font-semibold '>{project.name}</h1>
                                   <p className='text-white text-sm text-center line-clamp-3'>{project.description}</p>
                             </div>
                        </motion.div>
                    ))
                   }
             </div>
        </div>
    </div>
  )
}

export default ProjectSection