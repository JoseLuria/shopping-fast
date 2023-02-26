import { APIRoute } from 'astro'
import { db, response } from '@/server'
import { filterProductData } from '@/server/services'

export const get: APIRoute = async () => {
  const dbProducts = await db.product.findMany({})

  const products = filterProductData(dbProducts)

  return response(200, { size: products.length, products })
}
