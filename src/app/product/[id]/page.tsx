import { NextPage } from 'next'
import React from 'react'
import Info from './components/Info'
import Empty from './components/Empty'
import { getProducts } from '@/utils/api'
import { IProduct } from '@/types/api'

interface ProductProps {
  params: {
    id: string
  }
}

const Product: NextPage<ProductProps> = async ({ params }) => {
  const products = await getProducts()
  const current = products.find((item: any) => item.id === +params.id)

  return current ? <Info product={current as IProduct} /> : <Empty />
}

export default Product
