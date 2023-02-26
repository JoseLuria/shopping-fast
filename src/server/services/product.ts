import { excludeFields } from '@/server'
import { Product } from 'prisma/prisma-client'
import { ProductResponse } from '@/types'

export const filterProductData = (products: Product[]) => {
  return products.map(({ discount, price, ...data }) => {
    const fileds = excludeFields(data, ['category', 'description', 'properties'])

    const product: ProductResponse = { ...fileds, price }

    if (discount) {
      const discountQuantity = (price * discount) / 100
      product.oldPrice = price
      product.price = price - discountQuantity
    }

    return product
  })
}
