'use client'

import React, { FC, useEffect, useState } from 'react'
import Popup from '@/components/UI/Popup'
import Modal from './components/Modal'
import { DB } from '@/constants/database'

const Hero: FC = () => {
	const [isModal, setIsModal] = useState<boolean>(false)
	return (
		<section
			className='relative h-hero-background bg-contain sm:h-hero-background-sm lg:h-hero-background-lg'
			style={{
				backgroundImage:
					'url(https://stvybor.ru/images/nerg-cat-to-content.png)',
			}}
		>
			<div className='absolute top-0 left-0 bg-black-rgba w-full h-full'>
				<div className='container flex items-center justify-center h-full'>
					<div className='text-center text-black'>
						<h1 className='font-bold mb-4 text-xl text-white max-w-[700px] lg:text-3xl'>
							Специальные предложения на металлопрокат и другие виды товара
						</h1>
						<button
							onClick={() => setIsModal(true)}
							className='bg-blue-dark text-white font-medium hover:bg-blue-dark-opacity text-md py-2 px-4 sm:text-lg sm:py-3 sm:px-6'
						>
							Оставить заявку
						</button>
					</div>
				</div>
			</div>
			{isModal && <Popup onClick={() => setIsModal(false)} className='z-30' />}
			{isModal && <Modal close={() => setIsModal(false)} />}
		</section>
	)
}

export default Hero
