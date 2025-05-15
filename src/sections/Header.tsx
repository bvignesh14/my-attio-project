'use client'

import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.svg'
import Button from '@/components/Button'
import { SidebarMenu } from '@/components/SidebarMenu'
import { motion } from 'motion/react'

const Header = () => {

    const navLinks =[
        {
            id:1,
            title:'Product',
            link:'#product'
        },
        {
            id:2,
            title:'Resources',
            link:'#resources'
        },
        {
            id:3,
            title:'Customers',
            link:'#customers'
        },
        {
            id:4,
            title:'Pricing',
            link:'#pricing'
        },
    ]

  return (
    <section className='py-8 bg-gradient-to-r from-white to-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
            
            <div className='flex items-center gap-8'>
                <div className='flex-shrink-0'>
                    <Image 
                        src={logo} 
                        alt='attio-logo' 
                        width={120} 
                        height={40} 
                        className='object-contain'
                    />
                </div>

                <nav className='hidden md:flex items-center gap-8'>
                   {navLinks.map((link) => (
                    <motion.a 
                        href={link.link} 
                        key={link.id} 
                        className='text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium text-lg'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {link.title}
                    </motion.a>
                   ))} 
                </nav>
            </div>

            <div className='hidden lg:flex items-center gap-4'>
                <Button 
                    variant='secondary' 
                    className='whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 transition-all duration-300'
                >
                    Sign In
                </Button>
                <Button 
                    variant='primary' 
                    className='whitespace-nowrap px-6 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-all duration-300'
                >
                    Start for free
                </Button>
            </div>

            <div className='flex lg:hidden'>
                <SidebarMenu />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header
