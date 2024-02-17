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
        <Logo className="w-32 sm:w-44" />
        <Link href='/catalog'>
          <Catalog />
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
