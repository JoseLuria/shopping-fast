import type { FunctionComponent } from 'preact'
import type { ProductResponse } from '@/types'
import { formatCurrency } from '@/utils'

const ProductCard: FunctionComponent<ProductResponse> = ({
  name,
  slug,
  images,
  price,
  oldPrice
}) => {
  return (
    <a class='flex flex-col' title={name} href={`/products/${slug}`}>
      <picture class='aspect-square rounded-lg bg-white flex'>
        <img
          width={1600}
          height={1280}
          loading='lazy'
          class='w-full m-auto'
          src={images[0]}
          alt={name}
        />
      </picture>
      <h3 class='text-lg my-2 font-medium leading-5 line-clamp-3'>{name}</h3>
      <span class='flex mt-auto justify-between flex-wrap items-center gap-2'>
        <p class='text-white text-opacity-70 text-lg font-medium'>{formatCurrency(price)}</p>
        {oldPrice && (
          <span class='h-4 text-sm text-white text-opacity-50 line-through'>
            {formatCurrency(oldPrice)}
          </span>
        )}
      </span>
    </a>
  )
}

export default ProductCard
