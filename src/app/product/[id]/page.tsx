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

export async function generateStaticParams() {
  const response = await getProducts() as IProduct[]
  const products = response.map(item => ({ id: `${ item.id}` }))
 
  return products
}


const Product: NextPage<ProductProps> = async ({ params }) => {
  const products = await getProducts() as IProduct[]
  const current: IProduct | null = products?.find((item: any) => item.id === +params.id) || null

  return current ? <Info product={current as IProduct} /> : <Empty />
}

export default Product
