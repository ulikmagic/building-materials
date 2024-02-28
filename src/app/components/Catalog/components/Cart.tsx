'use client'

import { ICatalog } from '@/constants/catalogs'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'

interface CartProps extends ICatalog {
  className?: string
}

const Cart: FC<CartProps> = ({ id, image, title, className }) => {
  const router = useRouter()
  const [isHover, setIsHover] = useState<boolean>(false)

  const hover = () => setIsHover(true)
  const unhover = () => setIsHover(false)

  return (
    <div
      key={id}
      className={clsx('w-full h-48 rounded-md cursor-pointer overflow-hidden relative', className)}
      onClick={() => router.push(`/catalog/${id}`)}
      onMouseEnter={hover}
      onMouseLeave={unhover}
      onTouchStart={hover}
      onTouchEnd={unhover}
    >
      <div className='absolute w-full h-full top-1/2 z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center px-2'>
        <p className='text-xl text-white font-bold shadow-sm'>{title}</p>
      </div>
      <Image
        src={image}
        layout='fill'
        objectFit='cover'
        alt='catalog'
        className={clsx(
          'absolute top-0 left-0 w-full h-full duration-500 brightness-50',
          isHover && 'brightness-105 scale-150'
        )}
      />
    </div>  
  )
}
export default Cart
