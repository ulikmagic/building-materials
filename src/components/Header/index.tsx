'use client'

import React, { FC, createContext, useState } from 'react'
import UpHeader from './components/UpHeader'
import Logo from '@/assets/icons/logo.svg'
import Link from 'next/link'
import Burger from '../UI/Burger'
import Popup from '../UI/Popup'
import Menu from './components/Menu'

export interface IAuthConfig {
	isAuth: boolean
	setIsAuth: (status: boolean) => void
}

export const AuthContext = createContext<IAuthConfig | null>(null)

const Header: FC = () => {
	const [isMenu, setIsMenu] = useState<boolean>(false)
	return (
		<header>
			<UpHeader />
			<nav className='py-4 border-b-2 border-line'>
				<div className='container flex justify-between items-center'>
					<Link
						href='/'
						className='text-dark flex items-center gap-2 text-lg font-semibold'
					>
						<Logo className='w-8 h-8 sm:w-12 sm:h-12 text-blue-dark cursor-pointer' />
						ДН-Групп
					</Link>
					<Burger
						onClick={() => setIsMenu(!isMenu)}
						className='z-50 lg:z-0'
						isActive={isMenu}
					/>
				</div>
			</nav>
			{isMenu && <Popup onClick={() => setIsMenu(false)} className='z-40' />}
			<Menu isActive={isMenu} close={() => setIsMenu(false)} />
		</header>
	)
}

export default Header
