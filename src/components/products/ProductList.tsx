import { ProductResponse } from '@/types'
import { useState, useEffect } from 'preact/hooks'
import ProductPlaceholder from './ProductPlaceholder'
import ProductCard from './ProductCard'

type ProductsApi = { size: number; products: ProductResponse[] }

export default function ProductList() {
  const [products, setProducts] = useState<ProductResponse[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const { products }: ProductsApi = await fetch('/api/products').then((res) => res.json())
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return <ProductPlaceholder />
  }

  return products.map((props) => <ProductCard {...props} />)
}
