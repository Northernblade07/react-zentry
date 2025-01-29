import React from 'react'

const Button = ({id,title,leftIcon,containerClass,rightIcon }) => {
  return (
    <div>
      <button className={`group relative
        z-10 w-fit cursor-pointer overflow-hidden rounded-full hover:bg-violet-50 hover:text-black px-7 py-3  ${containerClass}`} id={id}>
       {leftIcon}
        <span className='relative inline-flex  overflow-hidden font-general text-xs uppercase'>
        <div>
        {title}
        </div>
        {rightIcon}
        </span>
      </button>
    </div>
  )
}

export default Button