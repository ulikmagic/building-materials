'use client'

import React, { FC, createContext, useEffect, useState } from 'react'
import UpHeader from './components/UpHeader'
import Logo from '@/assets/icons/logo.svg'
import Link from 'next/link'
import Burger from '../UI/Burger'
import Popup from '../UI/Popup'
import Menu from './components/Menu'
import { LocalStorage } from '@/utils/localStorage'
import AuthModal from './components/AuthModal'
import ProductModal from './components/ProductModal'
import { AUTH } from '@/config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { IAuthForm } from '@/types/auth'

export interface IAuthConfig {
 isAuth: boolean
 setIsAuth: (status: boolean) => void  
}

export const AuthContext = createContext<IAuthConfig | null>(null);

const Header: FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [authModal, setAuthModal] = useState<boolean>(false)
  const [productModal, setProductModal] = useState<boolean>(false)

  useEffect(() => {
    const data: IAuthForm | null = LocalStorage.getData('isAuth') || null
    
    if(data === null) return

    signInWithEmailAndPassword(AUTH, data.email, data.password)
      .then(() => setIsAuth(true))
  }, [])

  return (
    <header>
      <UpHeader />
      <nav className='py-4 border-b-2 border-line'>
        <div className='container flex justify-between items-center'>
          <Link href="/" className='text-dark flex items-center gap-2 text-lg font-semibold'>
            <Logo className="w-8 h-8 sm:w-12 sm:h-12 text-blue-dark cursor-pointer" />
            ДН-Групп
          </Link>
          <Burger onClick={() => setIsMenu(!isMenu)} className='z-50 lg:z-0' isActive={isMenu} />
        </div>
      </nav>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {isMenu && <Popup onClick={() => setIsMenu(false)} className='z-40' />}
        {authModal && (
          <>
            <Popup onClick={() => setAuthModal(false)} className='z-40' />
            <AuthModal close={() => setAuthModal(false)} />
          </>
        )}
        {productModal && (
          <>
            <Popup onClick={() => setProductModal(false)} className='z-40' />
            <ProductModal close={() => setProductModal(false)} />
          </>
        )}
        <Menu
          isActive={isMenu}
          close={() => setIsMenu(false)}
          openAuthModal={() => setAuthModal(true)}
          openProductModal={() => setProductModal(true)}
        />
      </AuthContext.Provider>
    </header>
)}

export default Header
