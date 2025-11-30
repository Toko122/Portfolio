'use client'

import axios from '../../lib/axios';
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { Spinner } from '../ui/spinner';

const ContactSection = () => {

     const [form, setForm] = useState({ name: "", email: "", message: "" });
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");
     const [success, setSuccess] = useState("");

     const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
     }

     const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess("")

        try{
          const res = await axios.post('/contact', form)

          if(res.status === 200){
            setSuccess("Message sent successfully!")
            setForm({ name: "", email: "", message: "" })
            setTimeout(() => setSuccess(''), 3000)
          }

        }catch(err){
            console.error(err)
            setError("Something went wrong. Please try again.")
            setTimeout(() => setError(''), 3000)
        }finally{
            setLoading(false)
        }
     }

  return (
    <form id='contact' onSubmit={handleSubmit} className="flex flex-col items-center text-sm py-12 px-4">

      <p className="text-4xl text-white font-semibold pb-2 drop-shadow-xl">
        Contact Me
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400 pb-4 
      drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
        Get in Touch ✨
      </h1>

      <p className="text-sm text-gray-300 text-center pb-10 max-w-[600px]">
        Feel free to reach out for any project, collaboration, or question.
        I’ll get back to you as soon as possible.
      </p>
      
      <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        
        <div className="w-full">
          <label className="text-gray-300" htmlFor="name">Your Name</label>
          <input
            name='name'
            onChange={handleChange}
            value={form.name}
            className="h-12 p-3 mt-2 w-full rounded-lg bg-[#1a1a1a] text-white 
            border border-purple-500/20 focus:border-purple-400 
            outline-none transition shadow-[0_0_10px_rgba(168,85,247,0.15)]"
            type="text"
            required
          />
        </div>

        <div className="w-full">
          <label className="text-gray-300" htmlFor="email">Your Email</label>
          <input
            onChange={handleChange}
            value={form.email}
            name='email'
            className="h-12 p-3 mt-2 w-full rounded-lg bg-[#1a1a1a] text-white 
            border border-purple-500/20 focus:border-purple-400 
            outline-none transition shadow-[0_0_10px_rgba(168,85,247,0.15)]"
            type="email"
            required
          />
        </div>

      </div>

      <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="text-gray-300" htmlFor="message">Message</label>
        <textarea
          onChange={handleChange}
          value={form.message}
          name='message'
          className="w-full mt-2 p-3 h-40 rounded-lg resize-none bg-[#1a1a1a] text-white
          border border-purple-500/20 focus:border-purple-400 
          outline-none transition shadow-[0_0_12px_rgba(168,85,247,0.15)]"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-8 bg-purple-600 hover:bg-purple-700 text-white h-12 w-56 rounded-lg 
        active:scale-95 transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)]
        hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] cursor-pointer"
      >
        {
           loading ? (
             <span className='flex items-center justify-center gap-2'><Spinner /> Loading</span>
           ) : (
             <span>Send Message</span>
           )
        }
      </button>

      <div className="mt-6 flex items-center gap-2 text-gray-300 hover:text-white transition cursor-pointer">
        <a
          href="https://github.com/Toko122?tab=repositories"
          target="_blank"
          className="flex items-center gap-2 text-sm
          hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
        >
           <FaGithub />
          <span>Visit my GitHub</span>
        </a>
      </div>

       {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}


    </form>
  )
}

export default ContactSection
