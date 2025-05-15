import Image from 'next/image'
import React from 'react'

type Props ={
    image:string
    title:string
    desc:string
}

const AllFeature = ({image, title, desc}:Props) => {
  return (
    <div className='border border-[#383E47] bg-[#26282D] rounded-3xl p-10'>
        <Image src={image} alt='feature-img' />
        <h2>{title}</h2>
        <p className='mt-2 text-gray-500'>{desc}</p>
    </div>
  )
}

export default AllFeature
