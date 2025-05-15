'use client'

import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Button = (props:{variant:'primary' | 'secondary'} &ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {children,variant,} =props
  return (
    <button className={twMerge('border border-[#1C1D1F] px-6 py-2 rounded-xl',
    variant === 'primary' && 'bg-[#1C1D1F] text-white',
    )}>
     {children}
    </button>
  )
}

export default Button
