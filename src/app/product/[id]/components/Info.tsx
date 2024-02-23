import { ICatalog, catalogs } from '@/constants/catalogs'
import { IProduct } from '@/constants/mock'
import Image from 'next/image'
import React, { FC } from 'react'

interface InfoProps {
  product: IProduct
}

const Info: FC<InfoProps> = ({ product }) => {
  const catalog: ICatalog | null = catalogs.find(item => item.id === product.catalog_type) || null 
  return (
    <section className='py-8 text-dark'>
      <div className='container flex gap-10 flex-col lg:flex-row'>
        <div className='relative w-[300px] h-[300px] sm:h-96 sm:w-96 m-auto lg:min-w-96'>
          <Image
            src={product.image}
            alt='product'
            fill
            objectFit='cover'
          />
        </div>
        <div className='flex flex-col gap-4 items-center lg:items-start'>
          <div>
            <h1 className='font-bold text-xl sm:text-3xl mb-3 text-center lg:text-start'>{product.title}</h1>
            <p className='text-md sm:text-lg'>{product.description}</p>
          </div>
          <div className='text-center sm:text-start'>
            <h2 className='text-2xl font-semibold mb-3'>Контакты:</h2>
            <p className='flex flex-col mb-2 sm:flex-row'><strong>Номер телефона:</strong> +996(507)-002-024</p>
            <p className='flex flex-col sm:flex-row'><strong>Email почта:</strong> acusize@gmail.com</p>
          </div>
          {catalog !== null && (
            <div>
              <p><strong>Категория:</strong> {catalog.title}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Info
