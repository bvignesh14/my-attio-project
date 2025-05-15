import Button from '@/components/Button'
import React from 'react'
import badgeImg from '@/assets/badgeImg1.svg'
import badgeImg2 from '@/assets/badgeImg2.svg'
import blockImg1 from '@/assets/blockImg1.svg'
import blockImg2 from '@/assets/blockImg2.svg'
import Image from 'next/image'

const Cta = () => {
  return (
    <section className='py-24'>
      <div className='container'>
      <Image src={blockImg1} alt='block-image' className='mb-4 object-cover w-full' />
        <div className='flex flex-col md:flex-row gap-10 md:items-center justify-between'>
            <div>
                <h2 className='font-bold text-3xl'>Scale with <span className='text-gray-300'>security</span></h2>
                <p className='max-w-[300px] mt-4'>Attio is audited and certified by industry
                leading Third Party standards.</p>
                <div className='mt-10 flex items-center gap-6'>
                <Button variant='primary' >Start for free</Button>
                <Button variant='secondary' >Talk to sales</Button>
                </div>
            </div>

            <div className='flex items-center gap-8'>
                <Image src={badgeImg} alt='badge-image' />
                <Image src={badgeImg2} alt='badge-image' />
            </div>
        </div>
        
        <Image src={blockImg2} alt='block-image' className='mt-4 object-cover w-full' />
      </div>
    </section>
  )
}

export default Cta
