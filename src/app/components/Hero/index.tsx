import Image from 'next/image'
import React, { FC } from 'react'
import BgHeroImage from '@/assets/images/bg-hero.png'

const Hero: FC = () => (
  <section className='relative h-hero-background sm:h-hero-background-sm lg:h-hero-background-lg'>
    <Image src={BgHeroImage} alt='background hero' className='w-full h-full absolute z-[-1]' />
    <div className="container flex items-center justify-center h-full">
      <div className='text-center text-black'>
        <h1 className='font-bold mb-2 text-xl sm:text-3xl lg:text-5xl lg:text-nowrap'>Специальные предложения</h1>
        <p className='mb-4 text-sm sm:text-lg lg:text-xl'>на строительные материалы и товары для ремонта</p>
        <button className='bg-yellow font-medium hover:bg-yellow-light text-md py-2 px-4 sm:text-lg sm:py-3 sm:px-6'>Подробнее</button>
      </div>
    </div>
  </section>
)

export default Hero
