export interface ProductResponse {
  id: string
  slug: string
  name: string
  stock: number
  images: string[]
  oldPrice?: number
  price: number
}
