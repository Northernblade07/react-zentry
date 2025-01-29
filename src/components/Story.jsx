import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';
import Button from './Button';

const Story = () => {
 
    const frameRef = useRef(); 
     const handleMouseLeave=()=>{
        const element = frameRef.current
        gsap.to(element,{
            duration :0.3 ,
            rotateX : 0,
            rotateY:0,
            transformPerspective:0,
            ease:'power1.inOut'

          })

     }
     const handleMouseEnter=()=>{

     }
     const handleMouseUp=()=>{

     }
     const handleMouseMove=(e)=>{
            const {clientX , clientY} = e;
            const element = frameRef.current;
            if(!element) return;

            const rect = element.getBoundingClientRect()
            const x = clientX-rect.left;
            const y = clientY-rect.top;

            const centerX = rect.width/2;
            const centerY  = rect.height/2;

            const rotateY = ((x-centerX)/centerX) * 10;
          const rotateX = ((y-centerY)/centerY) * -10;

          gsap.to(element,{
            duration :0.3 ,
            rotateX : rotateX,
            rotateY:rotateY,
            transformPerspective:500,
            ease:'power1.inOut'

          })
     }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50 '>
        <div className='flex size-full flex-col items-center py-10 pb-24 '>
            <p className='font-general uppercase text-sm md:text-[10px]'>the ULtiversal ip world</p>

            <div className='relative size-full'>
                <AnimatedTitle secitionId='#story' containerClass={'mt-5 pointer-events-none mix-blend-difference relative z-10'} title={'The st<b>o<b>ry of <br/> a hidden re<b>alm'}/>

                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img
                             onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseEnter={handleMouseEnter} 
                            onMouseMove={handleMouseMove}
                            ref={frameRef} src="img/entrance.webp" className='object-contain object-center' alt="entrance" />

                        </div>

                    </div>
                    <RoundedCorners/>

                </div>
            </div>

            <div className='-mt-60 flex justify-center md:-mt-4 w-full md:justify-end md:me-44'>
                <div className='flex h-full w-fit flex-col items-center md:items-start'>
                        <p className='mt-5 max-w-sm text-center font-circular-web text-violet-50 md:text-start'> where reals converge , lies zentry and the boundless piller Discover its secrets and shape your fate amidst infinite opportunities</p>

                        <Button title={'discover'} id='realm-btn' containerClass={'mt-5'}/>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Story
