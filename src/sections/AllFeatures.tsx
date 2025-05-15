'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import featureImg1 from '@/assets/allFeatureImg1.svg'
import featureImg2 from '@/assets/allFeatureImg2.svg'
import featureImg3 from '@/assets/allFeatureImg3.svg'
import featureImg4 from '@/assets/allFeatureImg4.svg'
import featureImg5 from '@/assets/allFeatureImg5.svg'
import featureImg6 from '@/assets/allFeatureImg6.svg'
import featureImg7 from '@/assets/crmBox.svg'
import AllFeature from '@/components/AllFeature'
import { useInView, motion } from 'motion/react'

const AllFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <section id='resources' ref={ref} className='bg-[#282B30] pt-24 md:pt-48 w-full'>
      <div className='container text-white w-full'>
        <h2 className='font-bold text-3xl'><span className='text-gray-500'>And so</span> much more...</h2>
        <p className='max-w-[320px] mt-4'>Your customers are always connected.
        Why should your CRM be any different?</p>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          <motion.div
           style={{
            opacity: isInView ? 1 :0,
            transitionDuration:'1s',
            transitionDelay:'0.5s',
             transitionTimingFunction:'ease-in'
          }}
          >
              <AllFeature 
              title='Quick actions'
              desc='Streamline your workflow with
              customizable shortcuts.'
              image={featureImg1}
              />
            </motion.div>

            <motion.div
             style={{
              opacity: isInView ? 1 :0,
              y: isInView? 0 :10,
              transitionDuration:'1s',
              transitionDelay:'1s',
               transitionTimingFunction:'ease-in'
            }}
            >
              <AllFeature 
              title='Automatic enrichment'
              desc='Update your contacts with the latest
              information on autopilot.'
              image={featureImg2}
              />
            </motion.div>

            <motion.div
             style={{
              opacity: isInView ? 1 :0,
              y: isInView? 0 :10,
              transitionDuration:'1s',
              transitionDelay:'1.4s',
               transitionTimingFunction:'ease-in'
            }}
            >
              <AllFeature 
              title='Chrome extension'
              desc='Stay lean with Attios lightweight
              browser extension.'
              image={featureImg3}
              />
            </motion.div>

            <motion.div
             style={{
              opacity: isInView ? 1 :0,
              y: isInView? 0 :10,
              transitionDuration:'1s',
              transitionDelay:'1.8s',
               transitionTimingFunction:'ease-in'
            }}
            >
              <AllFeature 
              title='Contact analysis'
              desc='Get deeper insights into your
              contacts at a single glance.'
              image={featureImg4}
              />
            </motion.div>

            <motion.div
             style={{
              opacity: isInView ? 1 :0,
              y: isInView? 0 :10,
              transitionDuration:'1s',
              transitionDelay:'2s',
               transitionTimingFunction:'ease-in'
            }}
            >
              <AllFeature 
              title='Filters'
              desc='Streamline your workflow with
              customizable shortcuts.'
              image={featureImg5}
              />
            </motion.div>

            <motion.div
             style={{
              opacity: isInView ? 1 :0,
              y: isInView? 0 :10,
              transitionDuration:'1s',
              transitionDelay:'2.4s',
               transitionTimingFunction:'ease-in'
            }}
            >
              <AllFeature 
              title='Tiered sorting'
              desc='Update your contacts with the latest
              information on.'
              image={featureImg6}
              />
            </motion.div>
        </div>


      </div>
        <div className='bg-[#2A6CED] flex flex-col md:flex-row md:justify-between gap-10 px-4 md:px-12 py-8'>
            <div className='text-white flex items-end'>
            <h2 className='font-semibold text-3xl md:text-4xl max-w-[450px]'><span className='text-[#A2C0F4]'>Ready to build your team&apos;s</span> dream CRM?</h2>
            </div>

            <div>
                <Image src={featureImg7} alt='crm-box' className='w-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default AllFeatures
