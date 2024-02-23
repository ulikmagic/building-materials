import React, { FC } from 'react'
import BgImage from '@/assets/images/bg-catalog.png'
import { ICurrentCatalog } from '../page'

interface HeroProps {
  catalog: ICurrentCatalog
}

const Hero: FC<HeroProps> = ({ catalog }) => (
  <div
    className='w-full bg-center bg-no-repeat h-[200px] md:h-[312px]'
    style={{ backgroundImage: `url(${BgImage.src})` }}
  >
    <div className='flex items-center justify-center h-full container'>
      <h1 className='font-bold text-2xl md:text-4xl text-center'>{catalog?.title || 'Продукт не найден'}</h1>
    </div>
  </div>
)

export default Hero
