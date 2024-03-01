import { NextPage } from 'next'
import Hero from './components/Hero'
import List from './components/List'
import { ICatalog, catalogs } from '@/constants/catalogs'
import { getProducts } from '@/utils/api'

interface ProductProps {
  params: {
    id: string
  }
}

export type ICurrentCatalog = ICatalog | null

export function generateStaticParams() {
  const products = catalogs.map(item => ({ id: `${item.id}` })) 
 
  return products
}

const Products: NextPage<ProductProps> = async ({ params }) => {
  const id = +params.id
  const response = await getProducts()
  const products: any[] = response.filter((item: any) => item?.catalog_type === id)
  const catalog: ICurrentCatalog = catalogs.find(item => item.id === id) || null

  return (
    <section className='py-4'>
      <Hero catalog={catalog} />
      <List products={products} />
    </section>
  )
}

export default Products
