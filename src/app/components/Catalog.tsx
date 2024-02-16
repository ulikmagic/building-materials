import { catalogs } from '@/constants/catalogs'
import React from 'react'
import Cart from './components/Cart'

const Catalog = () => (
  <section className='py-6 text-black'>
    <div className="container">
      <div className='text-center'>
        <h2 className='font-semibold text-h2'>Каталоги</h2>
        <hr className='w-40 mb-2 m-auto' />
        <p className='font-medium'>Самые качественные товары</p>
      </div>
      <ul className='hidden gap-4 mt-8 sm:grid sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {catalogs.map(item => 
          <Cart
            {...item}
            key={item.id}
          />
        )}       
      </ul>
    </div>
  </section>
)

export default Catalog
