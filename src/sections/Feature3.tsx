'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import featureImage5 from '@/assets/featureImg5.svg'
import featureImage6 from '@/assets/featureImg6.svg'
import featureImage7 from '@/assets/featureImg7.svg'
import featureImage8 from '@/assets/newFeatureImg.svg'
import Review from '@/components/Review'
import {useAnimate, useInView} from 'motion/react'
import SplitType from 'split-type'
import { stagger } from 'motion'

const Feature3 = () => {
        const [titleScope, titleAnimate] = useAnimate();
        const [scope, animate] = useAnimate();
        const isInView = useInView(scope,  { once: true })
  
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
          }, [isInView, animate, scope, titleAnimate, titleScope, ]);
  return (
    <section ref={scope} className='py-24'>
      <div className='container'>
        <h2 ref={titleScope} className='text-4xl md:text-5xl font-semibold max-w-[400px]'>Designed for multiplayer.</h2>
        <p 
          style={{
          opacity: isInView ? 1:0,
          transitionDuration:'1s',
          transitionDelay:'1.3s',
          transitionTimingFunction:'ease-in'
        }}
        className='max-w-[400px] mt-6'>The first truly multiplayer CRM. After all,
        the best work doesn&apos;t come from silos.</p>

        <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
            <div>
                <Image src={featureImage5} alt='image' className='w-full object-cover' />
            </div>
            <div>
                <Image src={featureImage6} alt='image' className='w-full object-cover' />
            </div>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-8 mt-10 '>

            <div className='bg-white shadow-lg rounded-2xl pt-10 pr-10 border border-gray-200'>
                <h2 className='pl-10 max-w-[400px]'>
                <span className='font-semibold'>Permission control.</span> Control how your team interacts with your business&apos;s
                collections, views, and emails.
                </h2>

                <div className='w-[300px] mt-10'>
                <Image src={featureImage7} alt='image' className='w-full object-cover' />
                </div>
            </div>

            <div className='bg-white shadow-lg rounded-2xl border  border-gray-200 pb-3 pt-10'>
              <h2 className='pl-10 max-w-[400px]'>
                <span className='font-semibold'>Hold that thought.</span> Never lose another idea with
                  Attio&apos;s real-time collaborative note-taking
                  features.
                </h2>

                <div className='mt-16 pl-10'>
                  <Image src={featureImage8} alt='image' className='w-full object-cover' />
                </div>
            </div>
        </div>

        <Review title='Chief fo Staff, Passionfroot' 
             text="Attio is an incredibly flexible product, you can build anything
              on it. It gives you the tools you need to build a CRM that's
              exactly right to your business, your data, and your
              processes."
            name='Dukhon'
            image='/review/imagePic21.jpg'
             />
      </div>
    </section>
  )
}

export default Feature3
