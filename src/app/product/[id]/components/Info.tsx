import { ICatalog, catalogs } from '@/constants/catalogs'
import { IProduct } from '@/types/api'
import Image from 'next/image'
import React, { FC } from 'react'
import toast from 'react-hot-toast'

interface InfoProps {
  product: IProduct
}

const Info: FC<InfoProps> = ({ product }) => {
  const catalog: ICatalog | null = catalogs.find(item => item.id === product.catalog_type) || null 
  return (
    <section className='py-8 text-dark'>
      <div className='container flex gap-10 flex-col lg:flex-row'>
        <div className='relative w-[300px] mx-auto lg:m-0 sm:h-96 sm:w-96 lg:min-w-96'>
          <Image
            src={product.image}
            alt='product'
            fill
            objectFit='cover'
            className='w-full h-auto'
          />
        </div>
        <div className='flex flex-col gap-4 items-center lg:items-start'>
          <div>
            <h1 className='font-bold text-xl sm:text-3xl mb-3 text-center lg:text-start'>{product.title}</h1>
            <p className='text-md sm:text-lg'>{product.description}</p>
          </div>
          <div className='text-center sm:text-start'>
            <h2 className='text-2xl font-semibold mb-3'>Контакты:</h2>
            <a target='_blank' href='tel:+996554909808' className='flex flex-col mb-2 sm:flex-row cursor-pointer'><strong>Номер телефона: +996(554)909-808</strong></a>
            <a href="mailto:dn.group.kgz@gmail.com" target='_blank' className='flex flex-col mb-2 sm:flex-row cursor-pointer'>
              <strong>Email почта: dn.group.kgz@gmail.com</strong>
            </a>
          </div>
          {catalog !== null && (
            <div>
              <p><strong>Категория: {catalog.title}</strong></p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Info
