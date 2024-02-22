import { NextPage } from 'next'

interface ProductProps {
  params: {
    id: number | string
  }
}

const Product: NextPage<ProductProps> = ({ params }) => (
  <div>
    {params.id}
  </div>
)

export default Product
