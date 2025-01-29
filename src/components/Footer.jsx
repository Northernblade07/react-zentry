import React from 'react'
import { FaDiscord, FaInstagram, FaTwitch } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

const Footer = () => {

    const links = [
        {href:'https://discord.com',
            icon: <FaDiscord/>},
            {href:'https://github.com',
                icon: <FaGithub/>},
                {href:'https://instagram.com',
                    icon: <FaInstagram/>},
                    {href:'https://twitch.com',
                        icon: <FaTwitch/>}
                    ]
  return (
    <footer className='bg-violet-500 w-screen py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-around gap-4 px-4 md:flex-row'>

        <p className='text-center text-sm md:text-[10px] md:text-left'>&copy; NOVA 2025.  All Rights Reserved </p>

        <div className='flex justify-center gap-4 md:justify-start'>
        {
            links.map((item,i)=>(
                <span className='hover:text-white' key={i}><a href={item.href}> {item.icon}</a></span>
            ))
        }

        </div>
      </div>
    </footer>
  )
}

export default Footer
