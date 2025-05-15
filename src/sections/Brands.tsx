import React from 'react'
import brand1 from '@/assets/brand1.svg';
import brand2 from '@/assets/brand2.svg';
import brand3 from '@/assets/brand3.svg';
import brand4 from '@/assets/brand4.svg';
import brand5 from '@/assets/brand5.svg';
import brand6 from '@/assets/brand6.svg';
import brand7 from '@/assets/brand7.svg';
import brand8 from '@/assets/brand8.svg';
import brand9 from '@/assets/brand9.svg';
import brand10 from '@/assets/brand10.svg';
import brand11 from '@/assets/brand11.svg';
import Image from 'next/image';

const Brands = () => {

    const logos1 =[
        {name:'cocacola', image:brand1},
        {name:'openai', image:brand2},
        {name:'pallet', image:brand3},
        {name:'causal', image:brand4},
        {name:'plain', image:brand5},
        {name:'passionfroot', image:brand6},
    ]
    const logos2 =[
        {name:'dopt', image:brand7},
        {name:'hyperline', image:brand8},
        {name:'ondesk', image:brand9},
        {name:'bravado', image:brand10},
        {name:'beacons', image:brand11},
    ]

  return (


      <div className="lg:-mt-10  flex gap-10 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        <div className='flex flex-col justify-center gap-10 w-full'>

            <div className='flex items-center justify-center flex-none gap-12'>
            {logos1.map((logo)=>(
                <Image key={logo.name} src={logo.image} alt={logo.name} width={100} height={100}/>
            ))}
            </div>

            <div className='flex items-center justify-center flex-none gap-12'>
            {logos2.map((logo)=>(
                <Image key={logo.name} src={logo.image} alt={logo.name} width={100} height={100} />
            ))}
            </div>
        
        </div>
       
        </div>
  )
}

export default Brands
