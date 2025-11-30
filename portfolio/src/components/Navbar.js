'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineSegment } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <div className='flex justify-center fixed top-0 z-20 w-full pt-4'>
        <div className='md:flex hidden backdrop-blur-2xl justify-between px-8 items-center bg-transparent border border-white/20 shadow-lg w-[900px] h-14 rounded-[30px]'>
          
          <Link href='/' className='flex items-center gap-1'>
            <span className='text-white text-2xl'>Toko</span>
            <span className='text-purple-600 text-2xl font-semibold'>Portfolio</span>
          </Link>

          <div className='flex items-center gap-8'>
            <Link href='/' className='text-white'>Home</Link>
            <Link href='#skills' className='text-white'>Skills</Link>
            <Link href='#projects' className='text-white'>Projects</Link>
            <Link href='#about' className='text-white'>About</Link>
            <Link href='#contact' className='text-white'>Contact</Link>
          </div>
        </div>

        <div className='md:hidden flex justify-between items-center w-full px-6'>
          <Link href='/' className='flex items-center gap-1'>
            <span className='text-white text-2xl'>Toko</span>
            <span className='text-purple-600 text-2xl font-semibold'>Portfolio</span>
          </Link>

          <div onClick={() => setOpenMenu(true)} className='text-white text-3xl'>
            <MdOutlineSegment className='text-white' />
          </div>
        </div>
      </div>

      {openMenu && (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-sm z-30 flex'>
          <div className='w-3/4 bg-[#1f1f1f] h-full px-6 py-10 flex flex-col gap-8 text-white animate-slideRight relative'>

            <button
              onClick={() => setOpenMenu(false)}
              className='absolute top-6 right-6 text-3xl text-white'
            >
              <IoMdClose />
            </button>

            <Link onClick={() => setOpenMenu(false)} href='/' className='mobile-link'>Home</Link>
            <Link onClick={() => setOpenMenu(false)} href='#skills' className='mobile-link'>Skills</Link>
            <Link onClick={() => setOpenMenu(false)} href='#projects' className='mobile-link'>Projects</Link>
            <Link onClick={() => setOpenMenu(false)} href='#about' className='mobile-link'>About</Link>
            <Link onClick={() => setOpenMenu(false)} href='#contact' className='mobile-link'>Contact</Link>
          </div>

          <div
            onClick={() => setOpenMenu(false)}
            className='w-1/4'
          />
        </div>
      )}
    </>
  )
}

export default Navbar
