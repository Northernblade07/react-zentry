import React from 'react'
import Button from './Button'

const BentoCard = ({ title, src, desc, isComingSoon }) => {
    return (
        <div className='relative size-full'>
            {/* <h2 className='text-blue-50 text-lg uppercase absolute'>{title}</h2> */}
            <video src={src} loop autoPlay muted className='absolute left-0 top-0 object-cover size-full object-center' />
            <div className='relative z-10 flex flex-col justify-between size-full p-5 text-blue-50'>
                <div>
                   <h1 className='uppercase bento-title special-font'>{title}</h1> 
                   {desc && (
                    <p className='mt-3 max-w-64 text-xs md:text-base'>{desc}</p>
                   )}
                </div>
            <div className='absolute bottom-10 left-5 z-20 flex'>
                <button className='hover:bg-zinc-950 bg-slate-900 px-6 py-3 rounded-full text-blue-50'>coming soon </button>
            </div>
            </div>
        </div>
    )
}

export default BentoCard
