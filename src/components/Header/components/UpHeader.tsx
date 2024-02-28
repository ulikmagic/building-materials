'use client'

import React, { FC } from 'react'
import PointIcon from '@/assets/icons/point.svg'
import Link from 'next/link'
import toast from 'react-hot-toast'

const copyNumber = () => {
  navigator.clipboard.writeText('+996554909808')
    .finally(() => toast.success('номер скопирован'))
}

const UpHeader: FC = () => (
  <nav className='bg-blue-dark py-3'>
    <div className="container text-white flex justify-end text-[15px]">
      <ul className='flex flex-col-reverse items-end sm:flex-row gap-x-6 text-lg'>
        <li onClick={copyNumber} className='cursor-pointer hover:underline'>+996(554)909-808</li>
        <li className='cursor-pointer'>
          <Link href="/address" className='flex items-center gap-2 hover:text-yellow'>
            <PointIcon  />
            <p>Бишкек</p>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default UpHeader
