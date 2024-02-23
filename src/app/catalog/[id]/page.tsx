import { NextPage } from 'next'
import Hero from './components/Hero'
import List from './components/List'
import { ICatalog, catalogs } from '@/constants/catalogs'
import { products } from '@/constants/mock'

interface ProductProps {
  params: {
    id: string
  }
}

export type ICurrentCatalog = ICatalog | null

const Product: NextPage<ProductProps> = ({ params }) => {
  const current: ICurrentCatalog = catalogs.find(item => item.id === +params.id) || null
  return (
    <section className='py-4'>
      <Hero catalog={current} />
      <List products={products} />
    </section>
  )
}

export default Product
