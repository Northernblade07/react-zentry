import React, { useRef, useState } from 'react'

const Hero = () => {
    const [CurrentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [IsLoaded, setIsLoaded] = useState(true);
    const [LoadedVideo, setLoadedVideo] = useState(0);

const totalVideos = 3;
const nextVideoRef = useRef(null);
    const handleMiniVdClick=()=>{
        setHasClicked(true);
        setCurrentIndex((prev)=>prev+1);
    }

const getVideoSrc=(index)=>`videos/hero-${index}.mp4`;
 
const upcomingVideoIndex = (CurrentIndex % totalVideos) +1;

const handleVideoLoad=()=>{
    setLoadedVideo((prev)=>prev+1)
}
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div className='relative z-10 overflow-hidden rounded-lg bg-blue-75' id='video-frame'>
            <div>
                <div className='mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg '>
                    <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-1 transition-all duration-500 hover:scale-100 hover:opacity-100'> 
                    <video
                     ref={nextVideoRef} 
                    src={getVideoSrc(upcomingVideoIndex)}
                    id='current-video'
                    className='size-64 origin-center scale-150 object-cover object-center'
                    onLoadedData={handleVideoLoad()}
                    />
                    </div>
                </div>
 <img src='img/play.svg' alt="" />
              <video 
              // ref={nextVideoRef}
              src={getVideoSrc(CurrentIndex === totalVideos-1?1:CurrentIndex)}
              loop
              muted
              // onLoadedData={handleVideoLoad}
              className='absolute left-0 top-0 size-full object-cover object-center'
              
              />

            </div>
      </div>
    </div>
  )
}

export default Hero
