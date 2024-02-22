import React, { FC } from 'react'
import UpHeader from './components/UpHeader'
import Logo from '@/assets/icons/logo.svg'
import Catalog from './components/Catalog'
import Link from 'next/link'

const Header: FC = () => (
  <header>
    <UpHeader />
    <nav className='py-4 border-b-2 border-line'>
      <div className='container flex justify-between items-center'>
        <Link href="/" className='text-dark flex items-center gap-2'>
          <Logo className="w-8 h-8 sm:w-12 sm:h-12 text-blue-dark cursor-pointer" />
          ДН-Групп
        </Link>
        <Link href='/catalog'>
          <Catalog />
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
