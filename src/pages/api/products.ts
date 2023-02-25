import { APIRoute } from 'astro'
import { db, response } from '@/server'

export const get: APIRoute = async () => {
  const products = await db.product.findMany({})

  return response(200, { size: products.length, products })
}
