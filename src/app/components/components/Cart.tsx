'use client'

import { ICatalog } from '@/constants/catalogs'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'

const Cart: FC<ICatalog> = ({ id, image, title, url }) => {
  const router = useRouter()
  const [isHover, setIsHover] = useState<boolean>(false)

  const hover = () => setIsHover(true)
  const unhover = () => setIsHover(false)

  return (
    <li
      key={id}
      className='w-full h-48 rounded-md shadow-cart cursor-pointer overflow-hidden relative'
      onClick={() => router.push(url)}
      onMouseEnter={hover}
      onMouseLeave={unhover}
      onTouchStart={hover}
      onTouchEnd={unhover}
    >
      <p
        className={`
          text-xl text-white font-bold absolute top-1/2 z-20 text-nowrap
          left-1/2 transform -translate-x-1/2 -translate-y-1/2
        `}
      >
        {title}
      </p>
      <Image
        src={image}
        alt='catalog'
        className={clsx(
          'w-full h-full absolute top-0 left-0 duration-500 hover:scale-150',
          isHover && 'brightness-50'
        )}
      />
    </li>  
  )
}
export default Cart
