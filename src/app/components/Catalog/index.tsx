'use client'

import { catalogs } from '@/constants/catalogs'
import React, { FC } from 'react'
import Cart from './components/Cart'
import Carousel from 'better-react-carousel'
import Dot from './components/Dot'

const Catalog: FC = () => (
  <section className='py-10 text-black'>
    <div className="container">
      <div className='text-center'>
        <h2 className='font-semibold text-h2'>Каталоги</h2>
        <hr className='w-40 mb-2 m-auto' />
        <p className='font-medium'>Самые качественные товары</p>
      </div>
      <div className='hidden gap-4 mt-8 sm:grid sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {catalogs.map(item => <Cart {...item} key={item.id} className='shadow-cart' /> )}       
      </div>
      <div className='sm:hidden mt-5'>
        <Carousel showDots dotColorActive="#FCEC41" dot={Dot} mobileBreakpoint={310}>
          {catalogs.map(item =>
            <Carousel.Item  key={item.id}>
              <Cart {...item} />
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    </div>
  </section>
)

export default Catalog
