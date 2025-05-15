'use client'
import { useInView } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'
import {motion,} from 'motion/react'

type Props ={
    image:string,
    text:string,
    name:string,
    title:string
}

const Review = ({image, text, title, name}:Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

  return (
        <motion.div ref={ref}
        style={{
            opacity: isInView ? 1:0,
            transitionDuration:'0.6s',
            transitionDelay:'0.4s',
             transitionTimingFunction:'ease-in'
          }}
        className='mt-10 flex flex-col'>
            <div className='flex justify-center mt-10'>
                <Image src={image} alt='image' width={100} height={100} className='rounded-full size-10 object-cover'/>
            </div>

            <blockquote className='text-center flex flex-col mt-8'>
                <div className='max-w-[450px] mx-auto'>
                <span>&ldquo;</span>
                    <span>{text}
                    </span>
                <span>&ldquo;</span>
                </div>

            <span className='mt-10'>{name}</span>
            <cite className='mt-2 text-[#555E67]'>{title}</cite>
            </blockquote>
        </motion.div>
  )
}

export default Review
