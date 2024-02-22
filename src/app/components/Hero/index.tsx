'use client'

import Image from 'next/image'
import React, { FC, useState } from 'react'
import BgHeroImage from '@/assets/images/bg-hero.png'
import Popup from '@/components/UI/Popup'
import Modal from './components/Modal'

const Hero: FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false)
  return (
    <section className='relative h-hero-background sm:h-hero-background-sm lg:h-hero-background-lg'>
      <Image src={BgHeroImage} alt='background hero' className='w-full h-full absolute z-[-1]' />
      <div className="container flex items-center justify-center h-full">
        <div className='text-center text-black'>
          <h1 className='font-bold mb-4 text-xl max-w-[700px] lg:text-3xl'>
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
      {isModal && <Popup onClick={() => setIsModal(false)} className='z-30' />}
      {isModal && <Modal close={() => setIsModal(false)} />}
    </section>
)}

export default Hero
