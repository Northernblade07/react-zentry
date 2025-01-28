import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// enable scroll trigger plugin to use scrolltrigger 
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
  const [CurrentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [IsLoaded, setIsLoaded] = useState(true);
  const [LoadedVideo, setLoadedVideo] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const upcomingVideoIndex = (CurrentIndex % totalVideos)+1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  }

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;


  const handleVideoLoad = () => {
    setLoadedVideo((prev) => prev + 1)
  }

  useEffect(()=>{
      if (LoadedVideo===totalVideos-1) {
        setIsLoaded(false)
      }
  },[LoadedVideo])

  useGSAP(()=>{
    if (hasClicked) {
      gsap.set('#next-video',{visibility:'visible'});
      
      gsap.to('#next-video',{
        transformOrigin:'center center',
        scale:1,
        width:'100%',
        height:'100%',
        duration:1,
        ease:'power1.inOut',
        onStart: ()=>nextVideoRef.current.play(),
      })

      gsap.from('#current-video',{
        transformOrigin:'center center',
        scale:0,
        duration:1.5,
        ease:'power1.inOut',
        onStart:()=>nextVideoRef.current.play(),
      })

    }
  },{dependencies:[CurrentIndex], revertOnUpdate:true})

  useGSAP(()=>{
   gsap.set('#video-frame',{
    clipPath:'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
    borderRadius:'0 0 40% 10% '
   })

   gsap.from('#video-frame',{
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration:0.5,
    borderRadius:'0 0 0 0',
// import scrolltrigger plugin at the start first
    scrollTrigger: {
      trigger:'#video-frame',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
      }
   })

  },{dependencies:[],})

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
    {IsLoaded&& (
      <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden'>
      <div className='three-body'>
        <div className='three-body__dot'/>
        <div className='three-body__dot'/>
        <div className='three-body__dot'/>
      </div>
      </div>
    )
    }
      <div className='relative z-10 h-dvh overflow-hidden rounded-lg bg-blue-75' id='video-frame'>
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg '>
            <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-1 transition-all duration-500 hover:scale-100 hover:opacity-100'>
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                id='current-video'
                className='size-64 origin-center scale-150 object-cover object-center '
                onLoadedData={handleVideoLoad}
                loop
                muted
                // playsInline
                autoPlay
              />
            </div>
          </div>
          {/* <img src='img/play.svg' alt="" /> */}

          <video src={getVideoSrc(CurrentIndex)}
            loop
            muted
            ref={nextVideoRef}
            id='next-video'
            className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
            onLoadedData={handleVideoLoad}
            autoPlay
          />

          <video
            // ref={nextVideoRef}
            src={getVideoSrc(CurrentIndex === totalVideos - 1 ? 1 : CurrentIndex)}
            loop
            autoPlay
            muted
            onLoadedData={handleVideoLoad}
            className='absolute left-0 top-0 size-full object-cover object-center '
            playsInline
          />

        </div>
        <h1 className='special-font hero-heading absolute bottom-5 text-blue-50 right-5 z-40'>
          Gaming
        </h1>

        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font hero-heading text-blue-100'>
              REDIFI<b />n<b />e
            </h1>
            <p className='mb-5 max-w-64
      font-robert-regular text-blue-100'>
              enter the Metagame Layer <br />
              Unleash the Play Economy

            </p>
            <Button id="watch-trailer" title="Watch trailer"
              leftIcon={<TiLocationArrow />} containerClass={'bg-yellow-300 flex-center gap-1'} />
          </div>
        </div>
      </div>
      <h1 className='special-font hero-heading absolute bottom-5 text-black  right-5'>
        Gaming
      </h1>


    </div>
  )
}

export default Hero;
