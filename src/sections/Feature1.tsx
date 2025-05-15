'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import featureImage from '@/assets/feature1.svg'
import Review from '@/components/Review'
import {motion, useAnimate, useInView} from 'motion/react'
import SplitType from 'split-type'
import { stagger } from 'motion'

const Feature1 = () => {

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

      animate(scope.current, 
        { opacity: 1, y: 0 }, // Final state
        { duration: 2, ease: "easeOut" } // Animation timing
      );
    }
  }, [isInView, animate, scope, titleAnimate, titleScope]);

  return (
    <section ref={scope} className='py-24'>
      <div className='container'>
        <h2 ref={titleScope} className='text-4xl md:text-5xl font-semibold max-w-[400px]'>A CRM created to be your own.</h2>
        <p
          style={{
            opacity: isInView ? 1:0,
            transitionDuration:'1s',
            transitionDelay:'1.3s',
             transitionTimingFunction:'ease-in'
          }}
        className='max-w-[400px] mt-6'>Tweak anything and everything to ensure Attio
        fits your business, not the other way around.</p>

        <motion.div 
        style={{
          opacity: isInView ? 1:0,
          transitionDuration:'1s',
          transitionDelay:'1s',
           transitionTimingFunction:'ease-in'
        }}
        className='mt-16'>
            <Image src={featureImage} alt='image' className='w-full object-cover' />
        </motion.div>

        <Review title='Chief of staff, Pallet' 
            text='My team loves Attio&apos;s reporting system because it&apos;s so
            dynamic. We can splice our data in so many different ways
            and combinations.' 
        image={'/review/imagePic6.jpg'} name='Davio White'  
        />
      </div>
    </section>
  )
}

export default Feature1
