'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import featureImage2 from '@/assets/featureImg2.svg'
import featureImage3 from '@/assets/featureImg3.svg'
import featureImage4 from '@/assets/featureImg4.svg'
import logoImg1 from '@/assets/logoFeature1.svg'
import logoImg2 from '@/assets/logoFeature2.svg'
import logoImg3 from '@/assets/logoFeature3.svg'
import logoImg4 from '@/assets/logoFeature4.svg'
import logoImg5 from '@/assets/logoFeature5.svg'
import logoImg6 from '@/assets/logoFeature6.svg'
import Review from '@/components/Review'
import {motion, useAnimate, useInView} from 'motion/react'
import SplitType from 'split-type'
import { stagger } from 'motion'

const Feature2 = () => {
      const [titleScope, titleAnimate] = useAnimate();
      const ref =useRef(null)
      const isInView = useInView(ref,  { once: true })

       useEffect(()=>{
          new SplitType(titleScope.current, {
            types:'lines,words',
            tagName:'span'
        });
        }, [titleScope])
      
        useEffect(() => {
          if (isInView) {
            titleAnimate( titleScope.current.querySelectorAll('.word'), {
                transform:'translateY(0)'
                        
              }, {
                duration:0.5,
                delay:stagger(0.2)
            })
    
          }
        }, [isInView,titleAnimate, titleScope]);

  return (
    <section ref={ref} className='py-24'>
      <div className='container'>
        <h2 ref={titleScope} className='text-4xl md:text-5xl font-semibold max-w-[500px]'>Modeled around your data and workflows.</h2>
        <p 
          style={{
            opacity: isInView ? 1:0,
            transitionDuration:'1s',
            transitionDelay:'1.3s',
             transitionTimingFunction:'ease-in'
          }}
        className='max-w-[400px] mt-6'>A CRM should go beyond deals. Attio is built
        for any business process.</p>

        <motion.div 
         style={{
            opacity: isInView ? 1:0,
            transitionDuration:'1s',
            transitionDelay:'1s',
             transitionTimingFunction:'ease-in'
          }}
        className='mt-16'>
            <Image src={featureImage2} alt='image' className='w-full object-cover' />
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
            <motion.div
             style={{
                opacity: isInView ? 1:0,
                transitionDuration:'1s',
                transitionDelay:'1.8s',
                 transitionTimingFunction:'ease-in'
              }}
            >
                <Image src={featureImage3} alt='image' className='w-full object-cover' />
            </motion.div>

            <motion.div 
                
            
            className='flex flex-col gap-10'>
                <div>
                <Image src={featureImage4} alt='image' className='w-full object-cover' />
                </div>

                <div className='w-full shadow-md rounded-lg p-4 flex items-center justify-center gap-6'>
                    <motion.div
                    initial={{y:30}}
                    animate={{ y: 0 }} 
                    transition={{ 
                        type: "spring", 
                        delay:0.5, 
                        duration:0.8 
                    }}
                    className='size-10 lg:size-14 rounded-xl border p-1 border-gray-300'>
                        <Image src={logoImg1} alt='image' className='w-full object-cover' />
                    </motion.div>

                    <motion.div 
                        initial={{y:30}}
                        animate={{ y: 0 }} 
                        transition={{ 
                            type: "spring", 
                            delay:0.7, 
                            duration:0.8 
                        }}
                    className='size-10 lg:size-14 rounded-xl border p-1 border-gray-300'>
                        <Image src={logoImg2} alt='image' className='w-full object-cover' />
                    </motion.div>
                    <motion.div className='size-10 lg:size-14 rounded-xl border p-1 border-gray-300'>
                        <Image src={logoImg3} alt='image' className='w-full object-cover' />
                    </motion.div>
                    <motion.div className='size-10 lg:size-14 rounded-xl border p-1 border-gray-300'>
                        <Image src={logoImg4} alt='image' className='w-full object-cover' />
                    </motion.div>
                    <motion.div className='size-10 lg:size-14 rounded-xl border p-1 border-gray-300'>
                        <Image src={logoImg5} alt='image' className='w-full object-cover' />
                    </motion.div>
                    <motion.div className='size-10 lg:size-14 rounded-xl border p-1 border-gray-300'>
                        <Image src={logoImg6} alt='image' className='w-full object-cover' />
                    </motion.div>
                </div>
            </motion.div>

        </div>
            <Review title='Chief fo Staff, Passionfroot' 
             text='Attio is an incredibly flexible product, you can build anything
                on it. It gives you the tools you need to build a CRM that is
                exactly right to your business, your data, and your
                processes.'
            name='Tanvir'
            image='/review/imagePic21.jpg'
             />
      </div>
    </section>
  )
}

export default Feature2
