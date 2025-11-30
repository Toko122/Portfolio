'use client'

import React, { useEffect, useState } from 'react'

const StarGenerator = () => {

    const [stars, setStars] = useState([])

    useEffect(() => {
      generateStars()
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 6000
        )
        const newStars = []

        for (let i = 0; i < numberOfStars; i++){
            newStars.push({
              id: i,
              size: Math.random() * 3 + 1,
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: Math.random() * 0.5 + 0.5
            })
        }

        setStars(newStars)
    }

  return (
    <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden min-h-screen'> 
        {
           stars.map((star) => (
             <div key={star.id} className='bg-white rounded-full absolute' style={{
                width: star.size + 'px',
                height: star.size + 'px',
                top: star.y + "%",
                left: star.x + '%',
                opacity: star.opacity
             }}>

             </div>
           ))
        }
    </div>
  )
}

export default StarGenerator