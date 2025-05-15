'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import React, {useEffect} from 'react'
import heroImage from '@/assets/heroImage.svg'
import Brands from './Brands'
import {motion, useAnimate} from 'motion/react'
import SplitType from 'split-type'
import {stagger } from 'motion'

const Hero = () => {

    const [scope, animate]=useAnimate()


    useEffect(()=>{
        new SplitType(scope.current, {
            types:'lines,words',
            tagName:'span'
        });

        animate( scope.current.querySelectorAll('.word'), {
            transform:'translateY(0)'
            
          }, {
            duration:0.3,
            delay:stagger(0.2)
          })

    }, [scope, animate])

  return (
    <section id='home' className='py-24 '>
        <div className='container'>
            <motion.div 
            initial={{
                scale:0
            }}
            animate={{
                scale:1
            }}
            transition={{
                delay:0.2,
                duration:0.5,
                ease:'easeIn'
            }}
            className='bg-[#F3F4F5] rounded-full px-4 py-2 text-[#1C1D1F] text-sm w-max mx-auto mb-8 flex items-center gap-2'>
                <span className='bg-[#383E47] text-white px-4 py-2 rounded-full'>New</span>
                Automations is now live! 🎉
            </motion.div>

            <motion.h2 
            initial={{
                opacity:0,
                
            }}
            animate={{
                opacity:1,
              
            }}
            transition=
            {{
                
                duration:0.7,
                ease:'easeIn'
            }}
            className='text-6xl md:text-7xl lg:text-8xl text-center max-w-[900px] mx-auto font-semibold flex flex-col'>Customer
                <motion.span 
                >relationship magic</motion.span>
                
            </motion.h2>
            
            <motion.p
            initial={{
                opacity:0,
            }}
            animate={{
                opacity:1,
            }}
            transition={{duration:0.2,
                ease:'easeIn'
            }}
            className='mt-8 text-center max-w-[500px] mx-auto lg:text-[18px]' ref={scope}>Powerful, flexible and data-driven, Attio makes it easy
            to build the exact CRM your business needs.</motion.p>

            <div className='flex items-center gap-4 mt-10 justify-center'>
                <motion.div
                 initial={{
                    opacity:0,
                    y:8
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={{duration:0.5,
                    ease:'easeIn',
                    delay:2,
                   
                }}
                >
                <Button variant='primary'>Start for free</Button>
                </motion.div>

                <motion.div
                   initial={{
                    opacity:0,
                    y:8
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={{duration:0.5,
                    ease:'easeIn',
                    delay:2.2,
                
                }}
                >
                <Button variant='secondary'>Talk to sales</Button>
                </motion.div>
            </div>

            <div
            className=''>
                <Image src={heroImage} alt='hero-image' />
            </div>
            <Brands  />


        </div>
    </section>
  )
}

export default Hero
