import { APIRoute } from 'astro'
import { db, msg, response, productsData } from '@/server'

export const post: APIRoute = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return response(400, { message: msg.development })
  }

  await db.product.deleteMany({})
  await db.product.createMany({ data: productsData })

  return response(200, { message: msg.seed })
}
