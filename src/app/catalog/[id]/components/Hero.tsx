import React, { FC } from 'react'
import { ICurrentCatalog } from '../page'

interface HeroProps {
  catalog: ICurrentCatalog
}

const Hero: FC<HeroProps> = ({ catalog }) => (
  <div
    className='w-full bg-contain bg-center h-[200px] md:h-[312px] relative'
    style={{ backgroundImage: 'url(https://kartinki.pics/uploads/posts/2022-03/thumbs/1647965394_3-kartinkin-net-p-kartinki-metalla-3.jpg)' }}
  >
    <div className='absolute top-0 left-0 w-full h-full bg-black-rgba'>
      <div className='flex items-center justify-center h-full container z-10'>
      <h1 className='font-bold text-2xl text-white md:text-4xl text-center'>{catalog?.title || 'Продукт не найден'}</h1>
    </div>
    </div>
  </div>
)

export default Hero
