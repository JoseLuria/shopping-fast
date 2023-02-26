import { APIRoute } from 'astro'
import { Category } from 'prisma/prisma-client'
import { db, msg, response } from '@/server'

const data = {
  slug: 'movistar-bmobile-ax687-16-gb-azul',
  name: 'Movistar Bmobile AX687 16 GB Azul',
  price: 1099,
  discount: 27,
  category: Category.celulares,
  stock: 34,
  description:
    '¡Práctico y ligero! El Bmobile AX687 color azul es el smartphone con el tamaño ideal y un gran desempeño. Captura bellos paisajes y momentos divertidos con la cámara principal de 5 MP y frontal de 2 MP; para que veas tus fotos cómodamente cuenta con una pantalla de 4 pulgadas.Además, gracias a su procesador Quad Core de 1.3 GHz y al sistema operativo Android puedes jugar, chatear y revisar tus redes sociales fácilmente. Con Bmobile AX687 tienes todo lo que necesitas al mejor precio.',
  images: [
    '/products/0f620168-7323-4969-9d95-f634f5805df3.jpg',
    '/products/55392569-7b11-472f-8c0c-4e216ac7d5d2.jpg',
    '/products/6443ff0b-0c6d-4f7e-b3df-8e171c005f7d.jpg',
    '/products/bae20635-920c-47c6-8cc2-4a469020245d.jpg',
    '/products/a5c1d67b-a50b-428c-9eed-7b69d8adc703.jpg'
  ],
  properties: [
    {
      name: 'Tamaño de pantalla',
      value: '4"'
    },
    {
      name: 'Cámara trasera',
      value: '5 mp'
    },
    {
      name: 'Cámara frontal',
      value: '2 mp'
    },
    {
      name: 'Sistema Operativo',
      value: 'android'
    },
    {
      name: 'Procesador',
      value: 'quad core'
    },
    {
      name: 'Red',
      value: '3g'
    },
    {
      name: 'Marca',
      value: 'BMOBILE'
    },
    {
      name: 'Modelo',
      value: 'AX687'
    },
    {
      name: 'Modelo #',
      value: 'AX687'
    },
    {
      name: 'Operador',
      value: 'Movistar'
    },
    {
      name: 'Color',
      value: 'azul'
    },
    {
      name: 'Memoria interna real',
      value: '16 gb'
    },
    {
      name: 'Memoria RAM',
      value: '512 mb'
    },
    {
      name: 'Memoria expandible',
      value: 'hasta 32 gb'
    },
    {
      name: 'Versión del procesador',
      value: '1.3 ghz'
    },
    {
      name: 'Garantía',
      value: '1 año de garantía directamente con el proveedor'
    },
    {
      name: 'Promocion',
      value: 'Oferta'
    }
  ]
}

export const post: APIRoute = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return response(400, { message: msg.development })
  }

  await db.product.deleteMany({})
  await db.product.create({ data })

  return response(200, { message: msg.seed })
}
