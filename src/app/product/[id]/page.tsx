import { NextPage } from 'next'
import React from 'react'
import Info from './components/Info'
import Empty from './components/Empty'
import { IProduct, products } from '@/constants/mock'

interface ProductProps {
  params: {
    id: string
  }
}

const Product: NextPage<ProductProps> = ({ params }) => {
  const isProduct: IProduct | null = products.find(item => item.id === +params.id) || null

  return isProduct ? <Info product={isProduct} /> : <Empty />
}

export default Product
