import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setisIndicatorActive] = useState(false)
    const [LastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible,setIsNavVisible] = useState(true)
    const navItems = ['Nexus', 'Vault', 'Prolouge', 'home', 'about ', 'contact']
    const navContainerRef = useRef(null);
    const AudioElementRef = useRef()
// for animation and changing of navbar when scrolling 
const {y:currentScrollY} = useWindowScroll();

useEffect(()=>{
    if (currentScrollY === 0) {
     setIsNavVisible(true);
     navContainerRef.current.classList.remove('floting-nav');
    }else if (currentScrollY>LastScrollY) {
        setIsNavVisible(false)
        navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY<LastScrollY){
        setIsNavVisible(true);
        navContainerRef.current.classList.add('floating-nav')
    }
    setLastScrollY(currentScrollY);
},[currentScrollY,LastScrollY])

// animating navbar scroll

useEffect(()=>{
    gsap.to(navContainerRef.current,{
        y:isNavVisible?0:-100,
        opacity:isNavVisible? 1:0,
        duration:0.2
    })
},[isNavVisible])
    const toggelAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setisIndicatorActive((prev) => !prev)
    }



    useEffect(() => {
        if (isAudioPlaying) {
            AudioElementRef.current.play();

        } else {
            AudioElementRef.current.pause();
        }
    }, [isAudioPlaying])
    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 border-none transition-all h-16 duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4 '>
                    <div className='object-cover flex items-center'>
                        <img src="img/logo.png" alt="logo" className='w-10' />
                        <Button id={'product-button'} title={'Products'} rightIcon={<TiLocationArrow />} containerClass={'bg-blue-50 md:flex hidden items-center justify-center gap-1'} />
                    </div>

                    <div className='flex h-full items-center'>
                        <div className='hidden md:block '>
                            {navItems.map((item, index) => (
                                <a href={`#${item.toLowerCase}`} className='nav-hover-btn' key={index}>{item}
                                </a>
                            ))}

                        </div>
                        <div >
                            <button onClick={toggelAudioIndicator} className='ml-10 flex items-center space-x-0.5'>
                                <audio className='hidden' ref={AudioElementRef} src="audio/loop.mp3" loop />
                                {[1, 2, 3, 4].map((i) => (
                                    <div className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} key={i} style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
