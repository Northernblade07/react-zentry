import React, { useRef, useState } from 'react'
import BentoCard from './BentoCard'
import { TiLocationArrow } from 'react-icons/ti'

const Features = () => {

    const BentoTilt = ({children , className})=>{
       const [transformStyle,setTransformStyle] = useState(" ")
        
       const itemRef = useRef();
       const handleMouseMove = (e)=>{
            if (!itemRef.current) return; 
                const {left , top , width , height } = itemRef.current.getBoundingClientRect()  ;
                const relativeX = (e.clientX - left)/width;
                const relativeY = (e.clientY - top)/height;

                const tiltx = (relativeY - 0.5)*10;
                const tiltY = (relativeX-0.5)*-10;

                const newTransform = `perspective(700px) rotateX(${tiltx}deg) rotateY(${tiltY}deg)  scale3d(0.95, 0.95, 0.95)`
                setTransformStyle(newTransform)
       }

       const handleMouseLeave=()=>{
        setTransformStyle(" ")
       }
        return(
            <div ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} style={{transform:transformStyle}}>{children}</div>
        )
    }


    return (
        <section className='pb-52 bg-black '>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-75'>Into the metagame layer</p>
                    <p className='max-w-md font-circular-web text-blue-50 opacity-50'>
                        immerse yourself in a rich and ever-exoanding universe where a vibrant
                        array of products converge into an interconnected overlay experience
                        on your world .
                    </p>
                </div>


            </div>
            <BentoTilt className='border-hsla relative h-96 w-full mb-7 overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard src="videos/feature-1.mp4" title={<>
                    radia<b>n</b>t </>}
                    desc={'A cross platform metagame app '}
                    isComingSoon={true} />
            </BentoTilt>

            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 '>
                <BentoTilt className='row-span-1 md:row-span-2  bento-tilt_1 md:col-span-1'>

                    <BentoCard src="videos/feature-2.mp4" title={<>zig<b>m</b>a </>}
                        desc={'A cross platform metagame app '}
                        isComingSoon={true} />
                        
                </BentoTilt>
                <BentoTilt className='row-span-1 bento-tilt_1 ms-32 md:ms-0 md:col-span-1'>
                    <BentoCard src="videos/feature-3.mp4" title={<>
                        nex<b>u</b>s </>}
                        desc={'A cross platform metagame app '}
                        isComingSoon={true} />
                </BentoTilt>
                <BentoTilt className='row-span-1 bento-tilt_1 me-14 md:ms-0 md:col-span-1'>
                    <BentoCard src="videos/feature-4.mp4" title={<>
                        az<b>u</b>l</>}
                        desc={'A cross platform metagame app '}
                        isComingSoon={true} />
                </BentoTilt>
                <div className='bento-tilt_2 hover:scale-105'>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                            <h1 className='text-black bento-title special-font max-w-64'>more coming soon!</h1>
                            <TiLocationArrow className='m-5 scale-[5] self-end' />
                        </div> 
                </div>

                <div className='bento-tilt_2 hover:scale-105'>
                        <video src="/videos/feature-5.mp4" muted loop autoPlay className='object-cover size-full '/>
                </div>

            </div>
        </section>
    )
}

export default Features
