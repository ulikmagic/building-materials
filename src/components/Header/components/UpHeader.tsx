import React, { FC } from 'react'
import PointIcon from '@/assets/icons/point.svg'
import Link from 'next/link'

const UpHeader: FC = () => (
  <nav className='bg-grey py-3'>
    <div className="container text-opacity-black flex justify-between text-[15px]">
      <Link href="/contacts" className='flex items-center gap-2 hover:text-yellow'>
        <PointIcon  />
        <p>Бишкек</p>
      </Link>
      <ul className='flex flex-col-reverse items-end sm:flex-row gap-x-6 text-opacity-black'>
        <li>+996 507 002 024</li>
        <li className='cursor-pointer'>
          <Link href="/contacts" className='hover:underline'>Контакты</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default UpHeader
