import { IProduct } from '@/types/api'
import Link from 'next/link'
import React, { FC } from 'react'

interface ListProps {
  products: IProduct[]
}

const List: FC<ListProps> = ({ products }) => (
  <div className='container pt-7 pb-10 text-dark font-medium'>
    <h2 className='text-h2 text-center mb-5 font-semibold'>Список товаров</h2>
    {products.length === 0
      ? (
        <div className='text-center'>
          <p className='font-semibold text-2xl text-red'>Ничего не найдено...</p>
        </div>
      )
      : (
        <ul className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {products.map(product => 
            <li key={product.id}>
              <Link href={`/product/${product.id}`} className='hover:underline hover:text-blue-dark'>
                <p>{'>'} {product.title}</p>
              </Link>
            </li>
          )}
        </ul>
      )
    }
  </div>
)

export default List
