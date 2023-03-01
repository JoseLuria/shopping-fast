import { Category } from 'prisma/prisma-client'

export const productsData = [
  {
    slug: 'celular-samsung-desbloqueado-galaxy-a13-dual-sim-1284-gb-azul',
    name: 'Celular Samsung Desbloqueado Galaxy A13 Dual Sim 128+4 GB Azul',
    price: 5599,
    discount: 27,
    category: Category.celulares,
    stock: 116,
    description:
      '¡El dispositivo que lo tiene todo! La tecnología siempre va en tu mano, mientras tomas fotos fantásticas y las compartes con el mundo, gracias a tu nuevo smartphone Samsung Galaxy A13.Es un dispositivo con una pantalla de 6.6" FHD+, que tiene un escáner de huellas dactilares para maximizar la privacidad. Posee el sistema operativo Android 12; acompañado de una memoria interna de 128 GB expandible a 1 TB, procesador Octa Core de 1.8 ghz y memoria RAM de 4 GB; logrando que el dispositivo pueda operar sin alentarse.Captura fotos fenomenales con sus cámaras principales de 50 + 5 + 2 + 2 mp, y la frontal de 8 mp es perfecta para que las selfies siempre sean perfectas.No te preocupes por estar cargando su batería, pues gracias a que es de 5,000 mah, garantiza que va a durar todo el día aún en uso. ¡Genial!',
    images: [
      '/products/b6252a32-2fc9-4b80-a787-d96cfad71bf0.webp',
      '/products/38b1acd6-5ddd-4c1e-91d4-d14d2545df04.webp',
      '/products/75d6033d-7cbf-4d15-aef8-f5e9afb514df.webp',
      '/products/011149ee-ca7d-45a7-abb2-90cef34f0e4e.webp',
      '/products/ec46fd6a-db31-4826-b6e0-d589f95e9f12.webp',
      '/products/05b681b8-c528-4cfe-93a1-7cd47fb5a3b1.webp',
      '/products/b71f3b9f-7a27-4fc4-807b-fade0e8d04be.webp',
      '/products/f5899cda-849b-4cfa-a958-1116744e5c0d.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.6"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '50 + 5 + 2 + 2 mp' },
      { name: 'Cámara frontal:', value: '8 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A13' },
      { name: 'Modelo #:', value: 'A13' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'azul' },
      { name: 'Tipo de sensores:', value: 'de huella digital' },
      { name: 'Tecnología de pantalla:', value: 'fhd+' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '4 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '1.8 ghz' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'baja' },
      { name: 'Tarjeta SIM:', value: 'dual-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-motorola-desbloqueado-moto-g42-128-gb-rosa',
    name: 'Celular Motorola Desbloqueado Moto G42 128 GB Rosa',
    price: 5899,
    discount: 14,
    category: Category.celulares,
    stock: 236,
    description:
      'El nuevo Motorola Moto G42 está equipado con una pantalla OLED de 6.4 pulgadas para ver tus contenidos con gran nitidez. Este dispositivo tiene un rendimiento óptimo gracias a su novedoso sistema operativo Android 12 y procesador octa-core a 1.9 GHz; además, descarga tu contenido favorito, ya que cuenta con un almacenamiento de 128 GB de memoria interna expandible hasta 1 tb.Captura cada momento con la cámara principal de 50 + 8 + 2 MP y la cámara frontal de 16 MP para unas selfies espectaculares, pues es esencial tener tus más alegres recuerdos. Disfruta de todas las ventajas que te ofrece tu nuevo Motorola Moto G42. ¡Anímate a pedirlo!',
    images: [
      '/products/9a088b24-7bd2-42a9-bb02-7057a1818d8b.webp',
      '/products/b8cb261a-9c80-46eb-a739-4d0b7a26d371.webp',
      '/products/1c90d12b-38fd-4009-8143-71c0e6386b5f.webp',
      '/products/30ede773-c991-4016-a1c1-34df01291137.webp',
      '/products/87897551-d553-481c-b2c2-fa6e12f7610a.webp',
      '/products/21293439-8547-4d98-941e-bef0adb79a92.webp',
      '/products/aa90206f-5e21-431b-b46d-e0090233667d.webp',
      '/products/8e8c580a-1980-40a5-91bb-fbcafd099db2.webp',
      '/products/dccf2155-c2ad-4145-825b-443f3947fbe9.webp',
      '/products/0d11f110-130e-47da-b4d1-cf4f37fa79f2.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.4"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Nuevo:', value: 'Nuevo' },
      { name: 'Cámara trasera:', value: '50 + 8 + 2 mp' },
      { name: 'Cámara frontal:', value: '16 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'MOTOROLA' },
      { name: 'Modelo:', value: 'MOTO G42 DUAL SIM' },
      { name: 'Modelo #:', value: 'G42 DUAL SIM' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'rosa' },
      { name: 'Tipo de sensores:', value: 'huella digital, desbloqueo facial' },
      { name: 'Tecnología de pantalla:', value: 'fhd+, goled' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '4 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '1.9 ghz' },
      { name: 'Resolución de video:', value: 'fhd' },
      { name: 'Garantía:', value: '1 año de garantía directamente con el proveedor' },
      { name: 'Gama:', value: 'media' },
      { name: 'SIM:', value: 'dual-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-galaxy-a13-dual-sim-1284-gb-negro',
    name: 'Celular Samsung Desbloqueado Galaxy A13 Dual Sim 128+4 GB Negro',
    price: 5599,
    discount: 27,
    category: Category.celulares,
    stock: 50,
    description:
      'Este Samsung Galaxy A13 negro es el smartphone que estabas esperando, su diseño minimalista y ligero le da un plus a su tecnología que te encantará.Tiene una pantalla FHD+ de 6.6 pulgadas con una resolución que te permitirá ver videos e imágenes con una calidad excelente, además tiene cuatro cámaras traseras de 50 + 5 + 2 + 2 MP y cámara frontal de 8 MP para que puedas tomar fotografías con una calidad extraordinaria.Tiene una memoria de 128 GB expandible hasta 1 TB para que guardes todo lo que necesites. Su sistema operativo es Android 12 y cuenta con un procesador Octa Core y RAM de 4 GB.¡Añade este Samsung Galaxy A13 a tu carrito de compras!',
    images: [
      '/products/f7507861-3ed9-48da-9864-14c63b68f49f.webp',
      '/products/aa91d7fa-efbb-47ca-93e2-97db3d1aaa4f.webp',
      '/products/eb3d42a3-f8c8-4bc8-b5bd-a9d0b9dd7f6b.webp',
      '/products/12168f60-3cdc-4a8b-851a-83233095fc4c.webp',
      '/products/f3f28af3-a007-47c7-b6a2-6e1e7fb8d1ee.webp',
      '/products/5480d143-974d-4b62-8456-23e491f3b135.webp',
      '/products/79e70fe9-ccb8-47db-be77-f56589283952.webp',
      '/products/7d39a9cf-b7c0-4d87-9cba-04b027ae1a22.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.6"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '50 + 5 + 2 + 2 mp' },
      { name: 'Cámara frontal:', value: '8 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A13' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'negro' },
      { name: 'Tipo de sensores:', value: 'de huella digital' },
      { name: 'Tecnología de pantalla:', value: 'fhd+' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '4 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'baja' },
      { name: 'Tarjeta SIM:', value: 'dual-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-galaxy-a53-128-gb-negro',
    name: 'Celular Samsung Desbloqueado Galaxy A53 128 GB Negro',
    price: 11099,
    discount: 18,
    category: Category.celulares,
    stock: 62,
    description:
      'Este Samsung Galaxy A53 negro es el smartphone que estabas esperando, su diseño minimalista y ligero le da un plus a su tecnología que te encantará.Tiene una pantalla FHD+ sAMOLED de 6.5 pulgadas con una resolución que te permitirá ver videos e imágenes con una calidad excelente, además tiene cuatro cámaras traseras de 64 + 12 + 5 + 5 MP y cámara frontal de 32 MP para que puedas tomar fotografías con una calidad extraordinaria.Tiene una memoria de 128 GB expandible hasta 1 TB para que guardes todo lo que necesites. Su sistema operativo es Android 12 y cuenta con un procesador Octa Core y RAM de 8 GB.¡Añade este Samsung Galaxy A53 a tu carrito de compras!',
    images: [
      '/products/a31c9111-fdc1-4b47-94b5-55ecddf377aa.webp',
      '/products/9d427b43-6642-47f4-9923-e7b375ba0ac5.webp',
      '/products/1a40d368-6bd6-453d-a778-e3b609619612.webp',
      '/products/2a30a3cc-aa9e-4c4e-aa3a-a94942c4eb1c.webp',
      '/products/e38336ba-ad1a-4c37-973e-6b2cf8f17ddc.webp',
      '/products/829fcf5b-b585-4b87-a5f1-85a83cb6005a.webp',
      '/products/8bddf664-980a-44a1-8cca-41c79d6504ad.webp',
      '/products/ddbd225c-8197-4c45-917e-1ee70d8bb56e.webp',
      '/products/526efb35-6a9a-4772-9795-6b1daf47f51e.webp',
      '/products/d43e6902-e09a-45a1-a87a-9693a2bcb662.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.5"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '64 + 12 + 5 + 5 mp' },
      { name: 'Cámara frontal:', value: '32 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '5g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A53' },
      { name: 'Modelo #:', value: 'A53 5G' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'negro' },
      { name: 'Tipo de sensores:', value: 'de huella digital' },
      { name: 'Tecnología de pantalla:', value: 'fhd + samoled' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '8 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'media' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-motorola-desbloqueado-g42-128-gb-verde',
    name: 'Celular Motorola Desbloqueado G42 128 GB Verde',
    price: 5899,
    discount: 14,
    category: Category.celulares,
    stock: 86,
    description:
      'Permanece en contacto en tus redes, disfruta de tus series favoritas, navega y más en tu nuevo smartphone Motorola de 128 GB que se encuentra desbloqueado.En el momento que desees puedes aprovechar su cámara trasera de 50 + 8 + 2 MP para capturar tus mejores fotos, o su cámara frontal de 16 MP para tus selfies. Integra una memoria interna de 128 GB (expandible hasta 1 TB) y una RAM de 4 GB que facilitan tu navegación. Además, su batería es de 5,000 mAh para que dures más tiempo sin necesidad de cargarlo.Este modelo en verde es el que necesitas en tu vida. ¡Agrégalo a tu carrito de compras en línea!',
    images: [
      '/products/1be1952a-9045-425e-a8b4-8d4cc536d07f.webp',
      '/products/9bd93230-771f-4536-8da3-bfa152fd9fd4.webp',
      '/products/4555bcc4-ab0f-46ea-a9dc-c4acb540c816.webp',
      '/products/62b03c03-f43f-4adc-a7ce-931b576550b9.webp',
      '/products/3f120624-234f-4d68-a75b-324b2ce81a02.webp',
      '/products/4fa0f02c-be38-42fe-adc9-6a6a0bc1e2aa.webp',
      '/products/f9deb91a-a510-4b18-9adb-66c895b78981.webp',
      '/products/01dc03e5-74cc-429b-bb36-f44ad149f46b.webp',
      '/products/6bb31539-0772-4637-80e0-db29ed9e920b.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.4"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Nuevo:', value: 'Nuevo' },
      { name: 'Cámara trasera:', value: '50 + 8 + 2 mp' },
      { name: 'Cámara frontal:', value: '16 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'MOTOROLA' },
      { name: 'Modelo:', value: 'MOTO G42 DUAL SIM' },
      { name: 'Modelo #:', value: 'G42' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'verde' },
      { name: 'Tipo de sensores:', value: 'huella digital, desbloqueo facial' },
      { name: 'Tecnología de pantalla:', value: 'fhd+' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '4 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '1.9 ghz, 2.4 ghz' },
      { name: 'Resolución de video:', value: '1080 p' },
      { name: 'Garantía:', value: '1 año de garantía directamente con el proveedor' },
      { name: 'Gama:', value: 'media' },
      { name: 'SIM:', value: 'dual-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-a53-128-gb-naranja',
    name: 'Celular Samsung Desbloqueado A53 128 GB Naranja',
    price: 11099,
    discount: 18,
    category: Category.celulares,
    stock: 207,
    description:
      'Estrena tu nuevo celular Samsung A53, con diseño en color anaranjado, y disfruta de los beneficios de la telefonía libre Redi.Posee una pantalla de 6.5 pulgadas, la cual cuenta con tecnología FHD + SAMOLED. Además, cuenta con cámaras traseras de 64 +12 + 5 + 5 MP, así como una frontal de 32 MP, con resolución de video UHD 4K (3840 x 2160). Funciona con sistema operativo Android 12 y procesador Exynos 1280 Octa Core, ofreciéndote rapidez y gran rendimiento. Asimismo, presenta un espacio de almacenamiento interno de 128 GB, expandible hasta 1 TB, así como una memoria RAM de 8 GB.También viene con una potente batería de 5000 mAh. ¡No esperes más y adquiérelo en Coppel.com!',
    images: [
      '/products/835eea51-5be6-4773-89fb-ab7ce2e3f047.webp',
      '/products/66a80041-6384-48b3-89c2-1495a6f17f73.webp',
      '/products/6d02f92c-2838-4fd1-b481-53748725130e.webp',
      '/products/54a3d642-b876-4416-b337-095647d8ce16.webp',
      '/products/93f657a8-1f0f-4461-9f13-1d12462e729e.webp',
      '/products/00436d97-ee45-4c35-a296-e11f0388941d.webp',
      '/products/b70bee2c-1e48-4ab2-a384-8098b46074ff.webp',
      '/products/2d26a62c-44b4-46b5-9f4e-ea5e13a4b154.webp',
      '/products/97a9cf35-605b-4c34-a534-98144e67d5ba.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.5"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '64 + 12 + 5 + 5 mp' },
      { name: 'Cámara frontal:', value: '32 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '5g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A53' },
      { name: 'Modelo #:', value: 'A53 5G' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'anaranjado' },
      { name: 'Tipo de sensores:', value: 'de huella digital' },
      { name: 'Tecnología de pantalla:', value: 'fhd + samoled' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '8 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Resolución de video:', value: 'UHD 4K' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'media' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-galaxy-a23-128-gb-azul',
    name: 'Celular Samsung Desbloqueado Galaxy A23 128 GB Azul',
    price: 6499,
    discount: 15,
    category: Category.celulares,
    stock: 99,
    description:
      'Pensado para tu comodidad. La tecnología siempre va en tu mano, mientras tomas fotos fantásticas y las compartes con el mundo, gracias a tu nuevo smartphone Samsung Galaxy A23.Es un dispositivo con una pantalla de 6.6" FHD+ y TFT, acompañado de un escaner de huellas dactilares para maximizar la privacidad. Posee el sistema operativo Android 12; acompañado de una memoria interna de 128 GB expandible a 1 TB, procesador Octa Core de 2.0 ghz y memoria RAM de 4 GB; logrando que el dispositivo pueda operar sin alentarse.Captura fotos fenomenales con sus cámaras principales de 50 + 5 + 2 + 2 mp, y la frontal de 8 mp es perfecta para que las selfies siempre sean sonrientes.No te preocupes por estar cargando su batería, pues gracias a que es de 5,000 mah, garantizar durar todo el día aún en uso. ¡Genial!',
    images: [
      '/products/a70ce612-4184-4baf-b204-f984430cb045.webp',
      '/products/0e46d250-63b8-4e34-a93b-5ec4a5e4e2b7.webp',
      '/products/3fc28235-95df-483e-9871-29eac9402ef1.webp',
      '/products/32cffc83-8dba-4625-aa67-c9773006e447.webp',
      '/products/90d5d363-64b0-4b1d-adb1-691d35b20436.webp',
      '/products/ffe9725e-8adc-4f8f-82c9-ba8b7f6e1658.webp',
      '/products/f8a8c993-5dc1-4ccb-a6c0-537f6149d3ca.webp',
      '/products/e81aa0ed-512f-4882-a89e-fe23092247c8.webp',
      '/products/67da162e-8f58-45ee-89d8-344670d224a7.webp',
      '/products/7e027994-2231-44f8-b38d-96d6f281d9ff.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.6"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '50 + 5 + 2 + 2 mp' },
      { name: 'Cámara frontal:', value: '8 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A23' },
      { name: 'Modelo #:', value: 'A23' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'azul' },
      { name: 'Tipo de sensores:', value: 'de huella digital' },
      { name: 'Tecnología de pantalla:', value: 'fhd+, tft' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '4 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '2.0 ghz' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'media' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-galaxy-a23-128-gb-blanco',
    name: 'Celular Samsung Desbloqueado Galaxy A23 128 GB Blanco',
    price: 6499,
    discount: 15,
    category: Category.celulares,
    stock: 60,
    description:
      'Reproduce películas, juegos o descarga tus apps favoritas, en tu nuevo celular Samsung Galaxy A23; un equipo con pantalla de 6.6" con tecnología FH+.Su diseño en color blanco, contempla curvas estilizadas que lo hacen más cómodo al sostener y facilitan la navegación. Posee una cámara trasera de 50 + 5 + 2 + 2 MP y una cámara frontal de 8 MP, que captura selfies asombrosas.Combina un procesador Octa Core de 2.0 GHz y memoria RAM de 4 GB que te permiten un rendimiento eficiente; mientras que el espacio de almacenamiento de 128 GB, se expande hasta 1 TB.¡Es momento de estrenar! Adquiere en Coppel.com el Samsung Galaxy A23, incluye adaptador de viaje de 25 W, cable tipo A-C, pin de expulsión y manual de usuario.',
    images: [
      '/products/80604dc8-f9be-42d5-896f-702e23033d37.webp',
      '/products/9892b54d-2954-4b7f-8de1-b17899e7953b.webp',
      '/products/d22ae876-c59a-4295-8d89-e2c14025488c.webp',
      '/products/c85e364f-5a96-44fb-bf7a-1af860a8072f.webp',
      '/products/099acddc-13d0-4b27-99cc-abf7b4f121b0.webp',
      '/products/8e1ea1f2-0b45-4fb1-ae85-bb1ccaee502e.webp',
      '/products/ecde9696-fcf1-4e2b-bfe5-686f83088110.webp',
      '/products/b53c5243-4080-4e2f-a9bc-5ab44a30253c.webp',
      '/products/385504ff-8928-4d0e-8130-916539f3c6ae.webp',
      '/products/1d352a62-717f-4458-906a-03c04cc89ea8.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.6"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '50 + 5 + 2 + 2 mp' },
      { name: 'Cámara frontal:', value: '8 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A23' },
      { name: 'Modelo #:', value: 'A23' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'blanco' },
      { name: 'Tecnología de pantalla:', value: 'fhd+' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '4 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '2.0 ghz' },
      { name: 'Resolución de video:', value: 'Full HD' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'media' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-galaxy-a23-128-gb-negro',
    name: 'Celular Samsung Desbloqueado Galaxy A23 128 GB Negro',
    price: 6499,
    discount: 15,
    category: Category.celulares,
    stock: 234,
    description:
      'Reproduce películas, juegos o descarga tus apps favoritas, en tu nuevo celular Samsung Galaxy A23; un equipo con pantalla de 6.6" con tecnología FH+.Su diseño en color negro, contempla curvas estilizadas que lo hacen más cómodo al sostener y facilitan la navegación. Posee una cámara trasera de 50 + 5 + 2 + 2 MP y una cámara frontal de 8 MP, que captura selfies asombrosas.Combina un procesador Octa Core de 2.0 GHz y memoria RAM de 4 GB que te permiten un rendimiento eficiente; mientras que el espacio de almacenamiento de 128 GB, se expande hasta 1 TB.¡Es momento de estrenar! Adquiere en Coppel.com el Samsung Galaxy A23, incluye adaptador de viaje de 25 W, cable tipo A-C, pin de expulsión y manual de usuario.',
    images: [
      '/products/1a6a0e4b-d389-4769-9560-08b45b8571a9.webp',
      '/products/b9119db0-435f-4e87-bf34-50012c563472.webp',
      '/products/a04a3fc8-4c54-47fb-ad82-2608cc2d42a2.webp',
      '/products/722b9453-e45b-4332-b41f-fd6a47d678fe.webp',
      '/products/d574a89a-d76a-40cd-8251-347edd7ab6aa.webp',
      '/products/de7fb4df-2a9f-4d71-982a-6140146591ce.webp',
      '/products/a70bfd22-2093-4373-aac0-9e84f68670b8.webp',
      '/products/fef6ac97-9b4c-4822-ba06-f0749f9bf379.webp',
      '/products/1d4b4dd0-71a9-4390-9b29-3ab08310becd.webp',
      '/products/a69521e1-aad6-4e8c-a44c-1a38252d1781.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.6"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '50 + 5 + 2 + 2 mp' },
      { name: 'Cámara frontal:', value: '8 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A23' },
      { name: 'Modelo #:', value: 'A23' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'negro' },
      { name: 'Tecnología de pantalla:', value: 'fhd+' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '4 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '2.0 ghz' },
      { name: 'Resolución de video:', value: 'Full HD' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'media' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-a53-128-gb-blanco',
    name: 'Celular Samsung Desbloqueado A53 128 GB Blanco',
    price: 11099,
    discount: 18,
    category: Category.celulares,
    stock: 80,
    description:
      'Estrena tu nuevo celular Samsung A53, con diseño en color blanco, y disfruta de los beneficios de la telefonía libre Redi.Posee una pantalla de 6.5 pulgadas, la cual cuenta con tecnología FHD + SAMOLED. Además, cuenta con cámaras traseras de 64 +12 + 5 + 5 MP, así como una frontal de 32 MP, con resolución de video UHD 4K (3840 x 2160). Funciona con sistema operativo Android 12 y procesador Exynos 1280 Octa Core, ofreciéndote rapidez y gran rendimiento. Asimismo, presenta un espacio de almacenamiento interno de 128 GB, expandible hasta 1 TB, así como una memoria RAM de 8 GB.También viene con una potente batería de 5000 mAh. ¡No esperes más y adquiérelo en Coppel.com!',
    images: [
      '/products/0cb796b2-79a6-416a-9c43-bc96cb55242b.webp',
      '/products/6d2442e9-bd5a-49d9-907e-8cae86f5c3a3.webp',
      '/products/255bed6e-15a4-4aaa-930e-a508f55e7fb3.webp',
      '/products/34493496-531d-4f62-bf61-b39875d79b3b.webp',
      '/products/d2911d27-32bb-4004-a744-1d3fc95beea8.webp',
      '/products/309f9ab1-1c08-4e6c-bf41-87cb79c0d91a.webp',
      '/products/ac6e0708-0d62-4de1-85ad-49d80210836e.webp',
      '/products/edcff105-8079-4c01-8f94-91c5deff88d2.webp',
      '/products/8ba4a4fd-1802-4de6-89be-6b69010dba9f.webp',
      '/products/a711d9e3-27d3-46f1-874c-bc0449b02d88.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.5"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '64 + 12 + 5 + 5 mp' },
      { name: 'Cámara frontal:', value: '32 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '5g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A53' },
      { name: 'Modelo #:', value: 'A53 5G' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'blanco' },
      { name: 'Tipo de sensores:', value: 'de huella digital' },
      { name: 'Tecnología de pantalla:', value: 'fhd + samoled' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '8 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Resolución de video:', value: 'UHD 4K' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'media' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-motorola-desbloqueado-moto-e20-32-gb-azul',
    name: 'Celular Motorola Desbloqueado Moto E20 32 GB Azul',
    price: 3299,
    discount: 24,
    category: Category.celulares,
    stock: 107,
    description:
      'Mantente en comunicación con los tuyos al estrenar este increíble celular Motorola E20 en color azul y disfruta de colores intentos con mayor nitidez gracias a su pantalla de 6.5".Este equipo cuenta con una memoria RAM de 2 GB para realizar llamadas, enviar mensajes, navegar y ejecutar apps, así como una memoria interna de 32 GB expandible hasta 1 TB para guardar todas las fotos y videos que quieras.Tiene un sistema operativo Android 11 con tecnología de 4G, además, integra un procesador Unisoc T606 Octacore y una batería de 4000 mAh con la cual tendrás energía por más tiempo. Tiene 2 cámaras traseras de 13 + 2 MP permitiéndote tomar fotos con más detalles y una cámara frontal de 5 MP para sacarte divertidas selfies.¡Máxima seguridad para que solo tú puedas acceder al equipo! Este Motorola E20 cuenta con sensor de huella dactilar y reconocimiento facial para su desbloqueo. ¡Solicítalo ahora mismo con unos cuantos clics en Coppel.com!',
    images: [
      '/products/1987c7c9-650f-4e67-ae41-a6e4bb548108.webp',
      '/products/8c9d70e3-24b1-4828-81a2-66107c2fdde7.webp',
      '/products/338b076a-b8a1-4556-80c0-8ecc0acbdb93.webp',
      '/products/4b7bec0d-9bd8-46e3-ad27-cc5dd25c8146.webp',
      '/products/c8f859e1-f2c1-4cc5-84cc-0075d4798b00.webp',
      '/products/e5085e4b-4c0e-4d64-87d1-fa9c6db23be6.webp',
      '/products/9140ac1d-b0ba-4b06-8708-b7d73d8dbb10.webp',
      '/products/7b7b1965-642c-4919-a63e-57d9a450cd2f.webp',
      '/products/27615ea7-5fb5-4287-b8d0-809766873d8c.webp',
      '/products/8a848f24-8a49-4775-b174-6db7281d7367.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.5"' },
      { name: 'Batería:', value: '4,000 mah' },
      { name: 'Cámara trasera:', value: '13 + 2 mp' },
      { name: 'Cámara frontal:', value: '5 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'MOTOROLA' },
      { name: 'Modelo:', value: 'MOTO E20' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'azul' },
      { name: 'Tipo de sensores:', value: 'desbloqueo facial, de huella digital' },
      { name: 'Memoria interna real:', value: '32 gb' },
      { name: 'Memoria RAM:', value: '2 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '1.6 ghz' },
      { name: 'Gama:', value: 'baja' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'apple-watch-series-8-45-mm-blanco-estelar',
    name: 'Apple Watch Series 8 45 mm Blanco Estelar',
    price: 12199,
    discount: null,
    category: Category.celulares,
    stock: 116,
    description:
      '¡Sencillamente innovador! La tecnología se comprime en una caja de 45 mm para estar al alcance de tus manos con el AppleWatch Series 8. Apple te ofrece una vez más un impecable diseño en su color blanco estelar. Tiene una pantalla de tipo OLED LTPO, ¡la cual también es resistente al polvo! Sus distintos sensores te permiten llevar tus actividades diarias con seguridad, ya que cuenta con monitoreo cardíaco, acelerómetro y GPS.¡Un chapuzón de modernidad! Con este reloj inteligente puedes sumergirte hasta 50 metros en el agua. ¡Mantente conectado con su conexión Bluetooth 5.0 y Wi-Fi, con los cuales puedes descargar tus apps favoritas sin perder espacio gracias a sus 32 GB de capacidad! ¡Finaliza ahora tu pedido de este Apple Watch Series 8!',
    images: [
      '/products/a65dbc28-f1c3-4b86-902d-2e7e3b0cd28a.webp',
      '/products/8705280f-3083-49c3-8f47-ea318051fe5e.webp',
      '/products/ac6b2165-e432-474b-9b46-87a14fae429d.webp',
      '/products/b93e641a-ff85-4603-8ff6-7e1633db4596.webp',
      '/products/1ac820c3-d79f-4d2d-a11f-f4dd13ef05d3.webp',
      '/products/af5474b2-c682-44d0-bf7c-e69f07c81b47.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'APPLE' },
      { name: 'Tipo de reloj:', value: 'apple watch' },
      { name: 'Modelo #:', value: 'S8 45MM STAR GPS' },
      {
        name: 'Funciones:',
        value: 'contesta llamadas y mensajes, gps, resistente al agua, brújula'
      },
      { name: 'Tipo de sensores:', value: 'acelerómetro, cardiaco óptico, temperatura' },
      { name: 'Sistema Operativo:', value: 'watchOS' },
      { name: 'Compatibilidad:', value: 'ios' },
      { name: 'Tipo de pantalla:', value: 'oled' },
      { name: 'Tamaño de pantalla:', value: '45 mm' },
      { name: 'Resistencia al agua:', value: '50 mts' },
      { name: 'Conectividad:', value: 'bluetooth, wi-fi' },
      { name: 'Diseño:', value: 'deportivo' },
      { name: 'Color:', value: 'blanco estelar' }
    ]
  },
  {
    slug: 'apple-watch-se-40-mm-negro',
    name: 'Apple Watch SE 40 mm Negro',
    price: 7299,
    discount: null,
    category: Category.celulares,
    stock: 78,
    description:
      '¡Tecnología, estilo y buenos hábitos! Apple innova una vez más con su AppleWatch SE de 40mm, ¡un modelo para mantenerte siempre conectado!Su color negro muestra un diseño implacable, ideal para los amantes del minimalismo. Prueba su avanzado sensor con el cual puedes obtener tu frecuencia cardíaca y monitorear tus sueños.¡Recorre las calles con seguridad! Este artículo cuenta con detector de choques y caídas, así como con GPS y brújula. Además, por resistencia al agua de hasta 50 metros de profundidad puedes sumergirte en grandes aventuras.Conéctate mediante Wi-Fi o Bluetooth 5.3, descarga tus aplicaciones favoritas gracias a sus 32 GB de memoria interna, y permite que la tecnología esté al alcance de tus manos con este AppleWatch SE, ¡finaliza ahora tu pedido!',
    images: [
      '/products/d9c40f96-b4e9-46f8-bb73-56e3c1a5b32a.webp',
      '/products/21bf3f30-da4e-4514-9c7c-22c39f339d9c.webp',
      '/products/650a9694-cd99-4993-a336-a5e0de7d7e27.webp',
      '/products/485ef3e2-1092-4c52-9f8a-edf549c2d671.webp',
      '/products/231801b4-8d92-408c-a0ac-ea5d4cdc80f5.webp',
      '/products/6affd24c-2005-4b1f-b8b0-84f98545f9f7.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'APPLE' },
      { name: 'Tipo de reloj:', value: 'apple watch' },
      { name: 'Duración de batería:', value: 'hasta 18 horas' },
      { name: 'Modelo #:', value: 'SE 40MM MDN GPS' },
      { name: 'Funciones:', value: 'contesta llamadas y mensajes, gps' },
      { name: 'Sistema Operativo:', value: 'watchOS' },
      { name: 'Tipo de pantalla:', value: 'oled' },
      { name: 'Tamaño de pantalla:', value: '40 mm' },
      { name: 'Resistencia al agua:', value: '50 mts' },
      { name: 'Conectividad:', value: 'bluetooth, wi-fi' },
      { name: 'Color:', value: 'negro' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-a13-dual-sim-1284-gb-blanco',
    name: 'Celular Samsung Desbloqueado A13 Dual Sim 128+4 GB Blanco',
    price: 5599,
    discount: 27,
    category: Category.celulares,
    stock: 45,
    description:
      'Disfruta de los beneficios de la telefonía libre Redi y estrena tu nuevo celular Samsung A13. Te encantará su diseño en color blanco.Posee una pantalla de 6.6 pulgadas, la cual cuenta con tecnología FHD+. Además, cuenta con cámaras traseras de 50 + 5 + 2 + 2 MP, así como una frontal de 8 MP, para fotos y videos de excelente calidad. Funciona con sistema operativo Android 12 y procesador Exynos 850 Octa Core 1.8 GHz, ofreciéndote rapidez y gran rendimiento. Asimismo, presenta un espacio de almacenamiento interno de 128 GB, así como una memoria RAM de 4 GB.También viene con sensor de huella digital, para desbloquear el teléfono móvil. ¡No esperes más y adquiérelo en Coppel.com!',
    images: [
      '/products/7f9fc835-ec48-4476-961a-dffb33197036.webp',
      '/products/648a5312-8a15-417e-a651-02576962b398.webp',
      '/products/26d91842-ff0d-4be0-8af0-91cb42268842.webp',
      '/products/857953bd-5cc9-4bbf-92dc-feac5b10ec5d.webp',
      '/products/212551eb-43c6-419f-99bc-f6009f84e2a7.webp',
      '/products/60290493-8e85-4912-a7a2-f109ea3aa22b.webp',
      '/products/395e9605-feb8-45a4-bae2-2303aae95dc1.webp',
      '/products/d3125415-7ea6-4c01-8b43-3a3eb0030b23.webp',
      '/products/bb52c4c6-2d57-44ce-a99c-f6f541a8210f.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.6"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '50 + 5 + 2 + 2 mp' },
      { name: 'Cámara frontal:', value: '8 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A13' },
      { name: 'Modelo #:', value: 'A13' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'blanco' },
      { name: 'Tipo de sensores:', value: 'de huella digital' },
      { name: 'Tecnología de pantalla:', value: 'fhd+' },
      { name: 'Memoria interna real:', value: '128 gb' },
      { name: 'Memoria RAM:', value: '4 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '1.8 ghz' },
      { name: 'Resolución de video:', value: 'Full HD' },
      {
        name: 'Garantía:',
        value: 'primeros 30 días en tienda coppel del día 31 al 365 directo con el proveedor'
      },
      { name: 'Gama:', value: 'baja' },
      { name: 'Tarjeta SIM:', value: 'dual-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'airpods-2da-generacin',
    name: 'AirPods 2da Generación',
    price: 3999,
    discount: null,
    category: Category.celulares,
    stock: 161,
    description:
      '¡Magia en tus oídos! Descubre una nueva manera de escuchar música con los AirPods inalámbricos 2da generación de la marca Apple.Este par diseñado en blanco se configuran con un simple toque y se activan automáticamente, saben cuándo están en tus oídos y se detienen cuando te los quitas. Además, se mantienen conectados brindándote hasta 5 horas de reproducción con una carga.Te ofrecen la opción de responder y finalizar llamadas, y son compatibles con iPhone, iPad y iPod Touch. Solo saca del estuche tus nuevos AirPods y disfruta de una experiencia inalámbrica diferente.',
    images: [
      '/products/c5a261d5-d517-4197-bfd6-15caec5e2ac9.webp',
      '/products/3e281ebf-1a87-4177-8241-5128084ede74.webp',
      '/products/e9c138b8-ea74-49d5-9bd4-05190161f907.webp',
      '/products/d98893ea-963d-4558-93d5-90b43dd57f80.webp',
      '/products/ab19e682-8ce2-4454-b912-bc16f6760caf.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'APPLE' },
      { name: 'Modelo:', value: 'pro' },
      { name: 'Modelo #:', value: 'AIRPODS 2DA GEN' },
      { name: 'Tipo de audifono:', value: 'inalámbricos' },
      { name: 'Color:', value: 'blanco' },
      { name: 'Compatibilidad:', value: 'ios, ipad, ipod touch, iphone' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-galaxy-a04e-32-gb-cobre',
    name: 'Celular Samsung Desbloqueado Galaxy A04E 32 GB Cobre',
    price: 2699,
    discount: 11,
    category: Category.celulares,
    stock: 119,
    description:
      "Con el Samsung Galaxy A04E llevas tu experiencia visual a un nuevo nivel. ¡Gracias a su pantalla de 6.5'' con tecnología HD+, disfrutas tus contenidos favoritos en colores más vivos! Con las cámaras de 13 + 2 MP logras capturar tus mejores momentos y guardarlos en la memoria interna de 32 GB que puedes expandir hasta 1 TB. Además, su sistema Android 12 y el procesador Octa Core 1.8 ghz, para una excelente respuesta al momento de que navegues en tus redes sociales.Por si fuera poco, ¡es un smartphone libre, por lo que tú eliges la red móvil! ¿Qué esperas? Disfruta al máximo tu nuevo Samsung Galaxy A04E color cobre.",
    images: [
      '/products/4074b8be-b264-43aa-b723-de8816485471.webp',
      '/products/98822d0d-5349-4cc0-8c92-34e578845049.webp',
      '/products/83fbcb10-e44e-46af-b95f-1ff5e2144fd3.webp',
      '/products/ad3c12f5-129b-4489-8237-346f000a96f9.webp',
      '/products/cbe29c04-a5cc-42bb-8d57-3bd2121858bf.webp',
      '/products/9c02bafb-c114-4b81-b727-992d8151192c.webp',
      '/products/eeb0903d-a5ad-4e4e-b44b-2a4635c88cc6.webp',
      '/products/0849f8fe-e820-4ff9-afaf-defd556a21e5.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.5"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '13 + 2 mp' },
      { name: 'Cámara frontal:', value: '5 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'GALAXY A04E' },
      { name: 'Modelo #:', value: 'A04E 32+3 GB' },
      { name: 'Operador:', value: 'virgin' },
      { name: 'Color:', value: 'cobre' },
      { name: 'Tecnología de pantalla:', value: 'hd +' },
      { name: 'Memoria interna real:', value: '32 gb' },
      { name: 'Memoria RAM:', value: '3 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '1.8 ghz' },
      { name: 'Resolución de video:', value: 'Full HD' },
      { name: 'Gama:', value: 'baja' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'celular-samsung-desbloqueado-a04e-64-g-azul',
    name: 'Celular Samsung Desbloqueado A04E 64 G Azul',
    price: 2999,
    discount: 10,
    category: Category.celulares,
    stock: 213,
    description:
      'Mantén siempre la comunicación con tus amigos y seres queridos con este celular Samsung A04E de telefonía libre en color azul.Saca provecho de su batería de 5000 mAh y úsalo durante todo tu día. Con una cámara trasera de 13 + 2 MP perfecta para videos. Además, disfruta de su pantalla LCD con 6.5 pulgadas en diagonal y resolución HD+. Tiene cámara frontal de 5 MP perfecta para selfies. Por último, se apoya de 3 GB de RAM y 64 GB de almacenamiento interno que puede ampliarse mediante MicroSD, en una única versión y que es expandible hasta 1 TB.Pide en línea este equipo móvil y te lo llevan hasta la comodidad de tu hogar.',
    images: [
      '/products/23adde67-31db-4d95-a373-d9f855cf1c2a.webp',
      '/products/916a8b08-e7e4-40ff-900b-56b7eb0a9378.webp',
      '/products/16047803-b3e1-4b04-92b5-80641b59c272.webp',
      '/products/ad8fa34f-d1e5-46c5-8066-64faf24e539f.webp',
      '/products/350a183c-cc05-459e-97f8-14d86a6ab5f8.webp',
      '/products/5a53c94e-4404-479a-a964-c9fdb0ad304b.webp',
      '/products/1c1da9b4-eb7d-4785-8e30-a248655ece23.webp',
      '/products/51488c4a-730d-4f40-88d9-0b8e35aefb18.webp',
      '/products/5374d551-062e-4170-a75a-ae378c6bb143.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '6.5"' },
      { name: 'Batería:', value: '5,000 mah' },
      { name: 'Cámara trasera:', value: '13 + 2 mp' },
      { name: 'Cámara frontal:', value: '5 mp' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Versión del sistema operativo:', value: '12' },
      { name: 'Red:', value: '4g' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo:', value: 'A04E 64+3 GB' },
      { name: 'Modelo #:', value: 'A04E 64+3 GB' },
      { name: 'Operador:', value: 'telefonía libre' },
      { name: 'Color:', value: 'azul' },
      { name: 'Tecnología de pantalla:', value: 'hd +' },
      { name: 'Memoria interna real:', value: '64 gb' },
      { name: 'Memoria RAM:', value: '3 gb' },
      { name: 'Memoria expandible:', value: 'hasta 1 tb' },
      { name: 'Procesador:', value: 'octa core' },
      { name: 'Versión del procesador:', value: '1.8 ghz' },
      { name: 'Resolución de video:', value: 'HD+' },
      { name: 'Gama:', value: 'baja' },
      { name: 'Tarjeta SIM:', value: 'nano-sim' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'proyector-portatil-samsung-30-a-100-the-freestyle',
    name: 'Proyector Portatil Samsung 30" a 100" The Freestyle',
    price: 21999,
    discount: 32,
    category: Category.electronica,
    stock: 143,
    description:
      'Mira tus películas, series y videos favoritos en cualquier lugar y de manera sencilla, con este proyector portátil Samsung.El modelo The Freestyle consiste en un proyector de Smart TV con una resolución de 1920 x 1080. Presenta un sistema operativo Tizen, una entrada micro HDMI, apps de Netflix, Prime Video, Youtube, y Samsung TV, así como asistente de voz Alexa y Bixby.Presenta un funcionamiento de 5 W, proyección de 30" a 100" y sonido 360°, Dolby Digital Plus, además de ser compatible con baterías externas usb-pd.Adquiere desde la comodidad de tu casa este proyector Samsung y finaliza tu compra en línea con un par de clics.',
    images: [
      '/products/3662c924-4bf1-421e-aea1-4d91c4ea33cd.webp',
      '/products/c2a2fa9e-0016-4151-90b2-9f647c233edb.webp',
      '/products/73b72427-6fd8-43a4-b267-117bce7ad55b.webp',
      '/products/4f960583-313d-4686-86ac-76330e2b29e7.webp',
      '/products/655ee61d-1e91-452a-89ae-1e3b34cff933.webp',
      '/products/2abda0c1-6028-420a-a5a4-310b409977a2.webp',
      '/products/f8bc4483-74cf-4eff-ad75-a73fc7d1c08c.webp',
      '/products/7f6eb4f2-f731-412e-a964-8be976c66c4a.webp'
    ],
    properties: [
      { name: 'Funciones:', value: 'Netflix, Youtube, smart tv' },
      { name: 'Sistema Operativo:', value: 'tizen' },
      { name: 'Control por comandos de voz:', value: 'compatible con amazon alexa' },
      { name: 'Pulgadas:', value: '100", 30"' },
      { name: 'Resolución de pantalla:', value: 'FULL HD' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Resolución en pixeles:', value: '1920 x 1080' },
      { name: 'Puertos/Entradas/Salidas:', value: 'micro hdmi' },
      { name: 'Compatibilidad:', value: 'amazon alexa, netflix, youtube' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo #:', value: 'SP-LSP3BLAXZX' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'pantalla-led-samsung-55-4k-ultra-hd-smart-tv-un55au7000fxzx',
    name: 'Pantalla LED Samsung 55" 4K Ultra HD Smart TV UN55AU7000FXZX',
    price: 15299,
    discount: 25,
    category: Category.electronica,
    stock: 152,
    description:
      'Disfruta tus tardes libres de maratones de películas y series con esta pantalla LED Samsung, la ideal para ver a tus personajes favoritos con su definición 4K Ultra HD.Es un modelo UN55AU7000FXZX, con una resolución de 3840 x 2160 que te permite ver todos los detalles. Es de 55", cuenta con tecnología smart TV para visualizar tus plataformas favoritas y tiene el sistema operativo Tizen.Además, cuenta con tres entradas HDMI para conectar tus consolas de videojuegos o tu laptop, y tiene una entrada USB.Añade a tu carrito de compra esta pantalla Samsung y adquiérela con unos clics desde la comodidad de tu hogar.Todo lo que necesitas saber sobre pantallas, dando clic aquí.',
    images: [
      '/products/ceb50333-8993-49f0-a691-016750c6312c.webp',
      '/products/81ba1599-2b19-4f08-8562-d10370ea50cb.webp',
      '/products/3feb5c12-7a85-4432-bc24-bf25b88f31fe.webp',
      '/products/0603228f-2aeb-4152-b80b-1bf84a7c0f57.webp',
      '/products/7d48571b-740d-4007-8224-7514fc552867.webp',
      '/products/450e426c-f9a7-4e83-a245-c4f51543f957.webp',
      '/products/c02db976-6618-42e2-97bc-99a47c2d9497.webp',
      '/products/2d97a5d9-deca-495b-973e-67bd6ef0f566.webp',
      '/products/580b8af1-8034-412c-8746-5fe98b07e996.webp',
      '/products/4eee9fd7-b09b-496b-8adb-695727596556.webp'
    ],
    properties: [
      { name: 'Sistema Operativo:', value: 'tizen' },
      { name: 'Pulgadas:', value: '55"' },
      { name: 'Resolución de pantalla:', value: 'ULTRA HD 4K' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Tecnología de pantalla:', value: 'crystal processor 4k' },
      { name: 'Puertos/Entradas/Salidas:', value: '4 entradas hdmi, 1 USB' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Marca:', value: 'SAMSUNG' },
      { name: 'Modelo #:', value: 'UN55AU7000FXZX' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'pantalla-oled-lg-55-ultra-hd-4k-smart-tv-oled55b2psa',
    name: "Pantalla OLED LG 55'' Ultra HD 4K Smart TV OLED55B2PSA",
    price: 19999,
    discount: 10,
    category: Category.electronica,
    stock: 116,
    description:
      "¡Adéntrate a una experiencia visual nunca antes vista! Disfruta de tus series, películas y videos favoritos en tu nueva televisión LG, una pantalla Ultra HD 4K de 55'', perfecta para que el entretenimiento vaya en grande.Esta Smart TV cuenta con tecnología OLED, la cual genera contrastes de colores más definidos y precisos, ¡una claridad asombrosa!Gracias a su sistema operativo WebOS puedes conectarte a internet, descargar y navegar entre todas tus aplicaciones de streaming favoritas y apps precargadas. O si lo prefieres, puedes conectar tus dispositivos en sus 2 entradas HDMI y 2 puertos para USB, aumentando tus opciones para una tarde llena de diversión.¡Sé el protagonista! Gracias a su audio Dolby Atmos, el sonido te va a envolver con un realismo impresionante. Además, gracias a su compatibilidad con Alexa y Google Assistant, puedes controlar el sonido, cambiar canales o reproducir tus listas de visualización solo usando tu voz.Deja que la innovación llegue hasta tu hogar con esta pantalla de 55 pulgadas, ¡estás a un par de clics de vivir la tecnología al estilo LG!",
    images: [
      '/products/58c443f7-d1e4-4822-b102-47f810fac11d.webp',
      '/products/73aca777-b027-4b9b-beb5-9c0ae4ce3ff5.webp',
      '/products/e534b4e1-220b-4347-b695-79a67295024f.webp',
      '/products/4431153e-45b4-469f-a568-ce6fb3ff54ec.webp',
      '/products/220091ea-2553-4196-b795-f49b90c7c0a2.webp',
      '/products/6ad7e157-cee8-4059-bb1f-8d6545f068df.webp',
      '/products/35d2ac02-ee33-4f18-a2c2-8fb0e2876d1e.webp',
      '/products/91ae3ec9-f07c-49f4-a52d-6bbf4cb15955.webp',
      '/products/b759dcce-6e3e-466d-811d-7fee3f2cc0e0.webp',
      '/products/d7bf7d24-bf55-4b31-ab32-35207fb78a91.webp'
    ],
    properties: [
      { name: 'Nuevo:', value: 'Nuevo' },
      { name: 'Sistema Operativo:', value: 'webOS' },
      { name: 'Control por comandos de voz:', value: 'compatible con google assistant' },
      { name: 'Pulgadas:', value: '55"' },
      { name: 'Resolución de pantalla:', value: 'ULTRA HD 4K' },
      { name: 'Tecnología:', value: 'OLED' },
      { name: 'Resolución en pixeles:', value: '3480 x 2160' },
      { name: 'Puertos/Entradas/Salidas:', value: '2 entradas usb' },
      { name: 'Potencia de audio:', value: '20 W' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Marca:', value: 'LG' },
      { name: 'Modelo #:', value: 'OLED55B2PSA' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'pantalla-led-hisense-40-full-hd-smart-tv-40a4hv',
    name: 'Pantalla Led Hisense 40" Full HD Smart TV 40A4HV',
    price: 8499,
    discount: 32,
    category: Category.electronica,
    stock: 108,
    description:
      'Prepara las palomitas y disfruta series, películas y tus programas favoritos con gran calidad de imagen y de audio con esta pantalla Hisense A4HV.Gracias a su resolución full HD y sus 40 pulgadas podrás disfrutar de gran calidad de imagen. Además, su audio DTS con tecnología Virtual:X acerca el sonido envolvente y procedente del techo a instalaciones de cine en casa que no cuenten con altavoces adicionales.Esta smart TV cuenta con sistema operativo VIDAA y apps precargadas, por lo que más que una televisión, es todo un centro de entretenimiento.Cuenta con entradas HDMI y USB, con las que puedes expandir las funciones de tu pantalla. Su tasa de refresco es de 120 Hz.Compra tu pantalla Hisense en Coppel.com, ¡y disfruta del cine como siempre has querido!Todo lo que necesitas saber sobre pantallas, dando clic aquí.',
    images: [
      '/products/21e8a18c-53cc-4624-9e03-00a0f296b4f5.webp',
      '/products/bb1d2423-e2ba-4cd6-8d73-5614c644660c.webp',
      '/products/4e2eb43e-6bd9-4cb8-97c0-b123e1c76895.webp',
      '/products/81a122a4-8d6c-438e-8abf-10a8f0ddf265.webp',
      '/products/083e1ede-da98-4cf6-943b-eb2277f7870f.webp',
      '/products/e6a66fe8-f63f-4db3-aece-840ad82240fd.webp',
      '/products/7e63d32d-ffb4-44b6-8986-ed181ab24359.webp'
    ],
    properties: [
      { name: 'Sistema Operativo:', value: 'vidaa' },
      { name: 'Pulgadas:', value: '40"' },
      { name: 'Resolución de pantalla:', value: 'FULL HD' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Resolución en pixeles:', value: '1920 x 1080' },
      { name: 'Hertz (velocidad de imagen):', value: '120 hz' },
      { name: 'Puertos/Entradas/Salidas:', value: 'hdmi, usb' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Marca:', value: 'HISENSE' },
      { name: 'Modelo #:', value: '40A4HV' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'pantalla-led-tcl-55-ultra-hd-4k-smart-tv-55s446',
    name: 'Pantalla LED TCL 55" Ultra HD 4K Smart TV 55S446',
    price: 12999,
    discount: 31,
    category: Category.electronica,
    stock: 165,
    description:
      'Todo lo que necesitas saber sobre pantallas, dando clic aquí.Asómbrate de la calidad de imágenes y sonido que te ofrece esta pantalla TCL 55S446 de 55".Esta smart TV con sistema operativo Google TV tiene Chrome Cast integrado, lo que te permite navegar de manera rápida, fácil e intuitiva con los mejores contenidos y apps precargadas. Cuenta con un motion rate de 120 hz que te brinda gran fluidez de imagen.Es una pantalla con tecnología LED y definición Ultra HD 4K con resolución de 3840 x 2160 píxeles, por lo que podrás visualizar los colores más naturales y realistas. Cuenta con una entrada para USB y tres para HDMI. Además, tiene audio de gran fidelidad gracias a su tecnología Dolby Digital Plus.¡Compra en línea en Coppel.com la pantalla TCL, y recíbela hasta la puerta de tu casa con solo unos clics!',
    images: [
      '/products/b43a0bc1-8471-41ab-8bbc-1e504f9805eb.webp',
      '/products/542e5bf5-ec98-430a-b635-a20480b4a03d.webp',
      '/products/3ea0f475-5686-4f59-88b0-5622186bfd19.webp',
      '/products/cb5d8961-a952-4ebf-8dda-1b322a94823a.webp',
      '/products/a9173968-5d39-48ea-89d8-c5e856fe48fe.webp',
      '/products/1c233519-5aa3-4497-8141-7034b84799f3.webp',
      '/products/d8166df3-89cb-4a15-8eae-56e1e44b4df6.webp'
    ],
    properties: [
      { name: 'Funciones:', value: 'smart tv' },
      { name: 'Sistema Operativo:', value: 'google tv' },
      { name: 'Control por comandos de voz:', value: 'compatible con google assistant' },
      { name: 'Pulgadas:', value: '55"' },
      { name: 'Resolución de pantalla:', value: 'ULTRA HD 4K' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Resolución en pixeles:', value: '3840 x 2160' },
      { name: 'Hertz (velocidad de imagen):', value: '120 Hz' },
      { name: 'Puertos/Entradas/Salidas:', value: 'hdmi, usb' },
      { name: 'Compatibilidad:', value: 'google assistant' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Incluye:', value: 'control remoto' },
      { name: 'Marca:', value: 'TCL' },
      { name: 'Modelo #:', value: '55S446' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'pantalla-led-lg-50-ultra-hd-4k-smart-tv-50uq8000psb',
    name: 'Pantalla LED LG 50" Ultra HD 4K Smart TV 50UQ8000PSB',
    price: 11999,
    discount: 17,
    category: Category.electronica,
    stock: 210,
    description:
      'Todo lo que necesitas saber sobre pantallas, dando clic aquí.Prepárate para ver maratones de todas tus series y películas favoritas con la mejor calidad y desde la comodidad de tu casa, con la pantalla LED marca LG.Esta pantalla modelo 50UQ8000PSB tiene una definición Ultra HD 4K que te permitirá apreciar los detalles más nítidos, además de contar con un sistema operativo WebOS y resolución 3840 x 2160.Su compatibilidad de conexión es con entradas: 3 HDMI y 1 USB, lo que la hace versátil con numerosos dispositivos. También cuenta con apps precargadas, y un procesador AI ThinQ (inteligencia artificial) de 5 gen.Convierte tu hogar en un moderno espacio al adquirir esta pantalla LG; anímate con tan solo unos cuantos clics.',
    images: [
      '/products/1e67ae69-d4cd-4c7a-9d2f-19a6b4993765.webp',
      '/products/405da745-a7a9-458c-88d2-1f2053607939.webp',
      '/products/56943f15-6ead-45f6-bcdd-c6646108130a.webp',
      '/products/89230fac-fedb-468e-afba-c816c6406d5d.webp',
      '/products/edceac95-29d4-4bed-88ac-6234eb2cb3c7.webp',
      '/products/226c52ff-480f-49e1-ae0b-6a71ff665b6d.webp',
      '/products/5d6c1f8b-1057-485d-88c4-c16ab6cbd149.webp',
      '/products/470778dd-bdff-419e-affa-1a2ff935569b.webp',
      '/products/5017a7b8-7803-4165-b9f6-7e7f0c85c611.webp',
      '/products/51a52af3-9c7c-4302-b9ac-d4aef44a2d4a.webp'
    ],
    properties: [
      { name: 'Funciones:', value: 'smart tv' },
      { name: 'Sistema Operativo:', value: 'webOS' },
      { name: 'Pulgadas:', value: '50"' },
      { name: 'Resolución de pantalla:', value: 'ULTRA HD 4K' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Resolución en pixeles:', value: '3840 x 2160' },
      { name: 'Diseño de pantalla:', value: 'led' },
      { name: 'Puertos/Entradas/Salidas:', value: '1 USB, 3 entradas hdmi' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Otra información:', value: 'apps precargadas' },
      { name: 'Marca:', value: 'LG' },
      { name: 'Modelo #:', value: '50UQ8000PSB' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'laptop-hp-14fq1005la-14-windows-11-amd-ryzen-3-8-gb-ram-256-gb-ssd-lila',
    name: 'Laptop HP 14-FQ1005LA 14" Windows 11 AMD Ryzen 3 8 GB RAM 256 GB SSD Lila',
    price: 13899,
    discount: 28,
    category: Category.electronica,
    stock: 17,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.¿Necesitas una laptop potente con un buen rendimiento? HP tiene una para ti, con este modelo 14-FQ1005LA, ya que está equipada con sistema operativo Windows 11 Home.Cuenta con memoria RAM de 8 GB, así como un procesador AMD Ryzen 3, al igual que 256 GB de SSD ideal para iniciar tu laptop en pocos segundos. Tiene gráficos AMD Radeon; características que te brindan potencia y fluidez, además su pantalla tiene resolución HD es de 14 pulgadas, tiene conectividad Wi-Fi y bluetooth, sin duda es la máquina que debes tener para realizar tus tareas o trabajos.Su diseño delgado, ligero, con pantalla de microbordes y amplia gama de colores vibrantes para expresar lo mejor de ti es de color lila y a los costados tiene entrada para USB, HDMI y 3.5 mm. Sus medidas son de 32.4 x 22.5 x 1.8 cm (cerrada).Sigue conectado con la laptop HP. ¡Pídela en Coppel.com y la recibes hasta la puerta de tu casa!',
    images: [
      '/products/8ef02354-ca74-4d49-91ee-1aa28e6be233.webp',
      '/products/9b2a4bde-a54d-48ce-878b-90dd02158a1b.webp',
      '/products/77dadb63-437e-4b4d-88f6-8fde5073b044.webp',
      '/products/59f0305b-9b86-42d5-b09d-969ceba7b8e0.webp',
      '/products/37e63f2e-d851-4e96-8227-24c340115bd1.webp',
      '/products/e3706883-5d3d-48b9-abb7-7b67e290b9f9.webp',
      '/products/b2e05107-b251-4bba-9013-cd6bbbf1683a.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'amd ryzen 3' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '256 GB' },
      { name: 'Tamaño de pantalla:', value: '14"' },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: '3.5 mm, hdmi, usb' },
      { name: 'Conectividad:', value: 'wifi, bluetooth' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '14-FQ1005LA' },
      { name: 'Color:', value: 'lila' },
      { name: 'Medidas (largo x ancho x alto):', value: '32.4 x 22.5 x 1.8 cm (cerrada)' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'laptop-hp-14dq0508la-14-windows-11-intel-pentium-silver-8-gb-ram-256-gb-ssd-azul--funda-y-mouse',
    name: 'Laptop HP 14-DQ0508LA 14" Windows 11 Intel Pentium Silver 8 GB RAM 256 GB SSD Azul + Funda y Mouse',
    price: 11499,
    discount: 23,
    category: Category.electronica,
    stock: 235,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Con un diseño moderno y sofisticado, la laptop HP 14-DQ0508LA es una puerta a un mundo lleno de apps y entretenimiento.Velocidad y visualización de contenido con gran calidad es lo que te ofrece este equipo, que cuenta con procesador Intel Pentium Silver, memoria RAM de 8 GB te permite iniciar tu laptop y aplicaciones en pocos segundos. Su alma es de Windows 11 Home y pantalla de 14" con calidad HD. Este modelo, color azul, viene con gráficos Intel UHD, conectividad WiFi + Bluetooth, entradas USB, HDMI, 3.5 mm e incluye funda protectora y mouse. Tiene unas medidas de 32.4 x 1.8 x 22.5 cm (cerrada).Adquiere hoy mismo esta laptop HP; añádela a tu carrito y con un par de clics finalizas tu compra.',
    images: [
      '/products/3460e70d-9346-41d0-a5bf-abeb1c2e4a99.webp',
      '/products/b7065214-849b-4c1b-b199-dc7638635fa0.webp',
      '/products/663dbcc4-59a5-40b1-8760-e2bcd638a3e2.webp',
      '/products/43799a09-e894-4f94-987d-f8333e0028de.webp',
      '/products/b3047a2c-f8fa-4ca5-a680-aa08369ab313.webp',
      '/products/b7021329-dcc3-470c-ba2c-0ff6741d5cef.webp',
      '/products/b4e894ba-a5ef-41d4-ab26-4698d05b3371.webp',
      '/products/d79553d2-f56b-4290-a4bd-8869a10d0624.webp',
      '/products/24477412-5c62-431c-a288-d2812b291590.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'intel penitum silver' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '256 GB' },
      { name: 'Tarjeta de video:', value: 'intel uhd' },
      { name: 'Tamaño de pantalla:', value: "14''" },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: 'hdmi, usb' },
      { name: 'Conectividad:', value: 'wifi, bluetooth' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '14-DQ0508LA' },
      { name: 'Color:', value: 'azul' },
      { name: 'Medidas (largo x ancho x alto):', value: '32.4 x 1.8 x 22.5 cm (cerrada)' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'laptop-hp-15ef1501la-156-windows-11-home-amd-athlon-silver-8-gb-ram-256-ssd-plateada',
    name: 'Laptop HP 15-EF1501LA 15.6" Windows 11 Home AMD Athlon Silver 8 GB RAM 256 SSD Plateada',
    price: 10499,
    discount: 19,
    category: Category.electronica,
    stock: 148,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Trabajar y estudiar es muy fácil con la ayuda de esta laptop HP modelo 15-EF1501LA, una excelente opción para ti, que necesitas moverte a diferentes puntos, pues su diseño compacto y bordes delgados la hacen fácil de transportar.Este modelo tiene un procesador AMD Athlon Silver y 8 GB de memoria RAM que la hacen muy rápida para que puedas realizar todas tus actividades sin problemas. Cuenta con 256 GB de almacenamiento en estado sólido, ayuda a iniciar tu laptop y apps en pocos segundos. Cuenta con gráficos AMD Radeon.Déjate encantar por su pantalla HD de 15.6 pulgadas con bordes superdelgados donde puedes ver imágenes claras y brillantes. Cuenta con un sistema operativo Windows 11 Home. Su diseño en color plateado la hace muy elegante y presenta unas medidas de 35.85 x 1.79 x 24.2 cm. Disfruta mientras haces todas tus actividades con esta laptop HP, pídela en Coppel.com hoy mismo.',
    images: [
      '/products/eff0e352-75cf-4a56-a8ee-75c25e643d50.webp',
      '/products/a7f2b5b2-6d46-4b90-a0b7-7cdac080f855.webp',
      '/products/df4f134b-1b61-4a5a-8335-8e7e4616522f.webp',
      '/products/1443380e-6955-406d-af00-49d78d4629dd.webp',
      '/products/65a8fb1a-773d-436d-a564-301fb1e4da59.webp',
      '/products/9af701a8-83a8-4c58-a604-f1d0566a5b62.webp',
      '/products/3d443947-8dc4-40df-ab99-cf8d90262771.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'AMD athlon silver' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '256 GB' },
      { name: 'Tarjeta de video:', value: 'amd radeon' },
      { name: 'Tamaño de pantalla:', value: "15.6'" },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: 'hdmi, usb, 3.5 mm' },
      { name: 'Conectividad:', value: 'bluetooth, wifi' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '15-EF1501LA' },
      { name: 'Color:', value: 'plateado' },
      { name: 'Medidas (largo x ancho x alto):', value: '35.85 x 1.79 x 24.2 cm (cerrada)' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'laptop-hp-14dq0510la-14-windows-11-intel-celeron-4-gb-ram-256-gb-ssd-negra--mouse-y-funda',
    name: 'Laptop HP 14-DQ0510LA 14" Windows 11 Intel Celeron 4 GB RAM 256 GB SSD Negra + Mouse y Funda',
    price: 9899,
    discount: 19,
    category: Category.electronica,
    stock: 67,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Diviértete o trabaja desde tu nueva laptop HP, modelo 14-DQ0510LA, la cual presume un atractivo diseño color negro, con una pantalla de 14".Este equipo cuenta con Intel UHD Graphics. Tiene un sistema operativo Windows 11 Home y un procesador Intel Celeron. Mientras que cuenta con 256 GB SSD y una memoria RAM de 4 GB. Mide 32.4 x 22.5 x 1.8 cm (cerrada).Se conecta a Wi-Fi y Bluetooth. Posee entradas USB, HDMI y 3.5 mm. Además, incluye mouse y funda. ¡Hazla tuya con unos cuantos clics aquí mismo!',
    images: [
      '/products/91bd6431-3c78-4c88-9a7f-aefed62da05f.webp',
      '/products/208aa49b-ba8e-4ef1-8577-c81428a0e704.webp',
      '/products/1b3967d4-a491-4191-b26c-4407660d6185.webp',
      '/products/d847a374-c427-4f5a-8c73-1e72a5108cc7.webp',
      '/products/ca3c9581-b42e-4c2d-a342-44c521b75836.webp',
      '/products/3ee74a4d-b347-4cb2-b15c-cc1c9938b391.webp',
      '/products/9a72eca5-8180-4e81-b06d-8c4e081d3910.webp',
      '/products/826d29c5-2a7f-43df-94cd-8a1fb7a642a8.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'intel celeron' },
      { name: 'Memoria RAM:', value: '4 GB' },
      { name: 'Unidad de Estado Solido:', value: '256 GB' },
      { name: 'Tamaño de pantalla:', value: "14''" },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: '3.5 mm, hdmi, usb' },
      { name: 'Conectividad:', value: 'wifi, bluetooth' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '14-DQ0510LA' },
      { name: 'Medidas (largo x ancho x alto):', value: '32.4 x 22.5 x 1.8 cm (cerrada)' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'pantalla-led-daewoo-50-ultra-hd-4k-smart-tv-daw50ur',
    name: 'Pantalla LED Daewoo 50" Ultra HD 4K Smart TV DAW50UR',
    price: 9499,
    discount: 16,
    category: Category.electronica,
    stock: 129,
    description:
      'Todo lo que necesitas saber sobre pantallas, dando clic aquí.Prepárate para ver maratones de todas tus series y películas favoritas con la mejor calidad y desde la comodidad de tu casa con la pantalla LED marca Daewoo.Esta pantalla modelo DAW50UR tiene una definición Ultra HD 4K y resolución 3840 x 2160 que te permitirán apreciar los detalles más nítidos, además de contar con sistema operativo Roku TV.Su compatibilidad de conexión es con entradas: 3 HDMI y 1 USB, lo que la hace versátil con numerosos dispositivos. También cuenta con bocinas traseras.Convierte tu hogar en un moderno espacio al adquirir esta pantalla Daewoo. ¡Anímate a comprarla y agrégala a tu carrito con tan solo unos clics!.',
    images: [
      '/products/7b3cc9e9-94b0-4acd-8c71-e6861ae9c17c.webp',
      '/products/da47cae3-0bd3-4b36-8017-2c69363421d6.webp',
      '/products/a3c1c9c1-add9-4dde-ae7c-baaf7023a4b1.webp',
      '/products/dda68ab4-10f5-4928-82c0-a8adcaa7f0ca.webp'
    ],
    properties: [
      { name: 'Funciones:', value: 'smart tv' },
      { name: 'Sistema Operativo:', value: 'roku tv' },
      { name: 'Pulgadas:', value: '50"' },
      { name: 'Resolución de pantalla:', value: 'ULTRA HD 4K' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Resolución en pixeles:', value: '3840 x 2160' },
      { name: 'Diseño de pantalla:', value: 'led' },
      { name: 'Compatibilidad:', value: 'roku app' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Marca:', value: 'DAEWOO' },
      { name: 'Modelo #:', value: 'DAW50UR' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'cmara-canon-eos-rebel-t7-efs-18',
    name: 'Cámara Canon EOS Rebel T7 EF-S 18',
    price: 14599,
    discount: null,
    category: Category.electronica,
    stock: 47,
    description:
      'Guarda de tus viajes, cumpleaños, u otros eventos importantes los mejores recuerdos. Captura imágenes profesionales con la cámara Canon EOS Rebel T7 EF-S 18 ¡quedarán para la posteridad! Obtén imágenes de alta calidad gracias al pixelaje de 24.10 MP, así como al lente EF-S 18-55 mm.  Graba videos con calidad Full HD y compártelos con tus amigos de manera rápida mediante las tecnologías Wi-Fi y NFC integradas.Con el rápido sistema de enfoque automático puedes congelar cada momento rápidamente, visualizando cada toma a través del luminoso visor óptico y de la pantalla LCD grande. Presenta unas medidas de 12 x 7 x 10 cm.¡Cada aventura debe quedar grabada en una fotografía! Con canon es posible.',
    images: [
      '/products/fd50e9ba-2f31-4539-9345-9185cd58a72f.webp',
      '/products/efd0e7f3-21cc-4b9a-9735-bcddd3eb41d6.webp',
      '/products/0bdca9d2-b798-4b72-975e-f3eddca2a124.webp',
      '/products/20c4dfae-0628-4e8c-96ff-27d4c03fea0c.webp',
      '/products/7b616a9b-cf60-4479-98e6-14712ac34205.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'CANON' },
      { name: 'Modelo #:', value: 'EOS REBEL T7 EF-S 18' },
      { name: 'Medidas (largo x ancho x alto):', value: '12 x 7 x 10 cm' },
      { name: 'Beneficios:', value: 'nfc, wi-fi' },
      { name: 'Batería:', value: 'lp-e10' },
      { name: 'Pantalla:', value: 'lcd' },
      { name: 'Sensor:', value: 'cmos' },
      { name: 'Megapixeles:', value: '24.10' },
      { name: 'Lente:', value: 'ef-s 18-55 mm' },
      { name: 'Tipo de cámara:', value: 'eos rebel' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'laptop-hp-14dq2502la-14-intel-core-i3-8-gb-ram-256-gb-ssd-plata--impresora-hp-2375',
    name: 'Laptop HP 14-DQ2502LA 14" Intel Core i3 8 GB RAM 256 GB SSD Plata + Impresora HP 2375',
    price: 13199,
    discount: null,
    category: Category.electronica,
    stock: 212,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Trabajar y estudiar es muy fácil con la ayuda de esta laptop HP modelo 14-DQ2502LA, una excelente opción para mantenerte conectado en todo momento. Este modelo tiene un procesador Intel Core i3 y 8 GB de memoria RAM que la hacen muy rápida para que puedas realizar todas tus actividades sin problemas. Cuenta con 256 GB de almacenamiento en estado sólido y una tarjeta de video Intel UHD. Déjate encantar por su pantalla HD de 14 pulgadas donde vas a poder disfrutar imágenes claras y brillantes. Llevarla contigo no va a ser un problema gracias a su batería que dura hasta 10 horas en uso.Su diseño en color plata la hace muy elegante y tiene unas medidas de 32.4 x 1.8 x 22.5 cm (cerrada). Incluye una impresora HP 2375. Disfruta mientras realizas todas tus actividades con esta laptop HP, pídela en Coppel.com hoy mismo.',
    images: [
      '/products/d0d963c1-ef57-409e-b2a6-b985224a1ac6.webp',
      '/products/bb15c9b5-d446-4a8c-8f2d-ac94cb3c9525.webp',
      '/products/839a248f-5100-4209-a1ea-e7075b2d1924.webp',
      '/products/0778223c-73ce-4fa5-aebe-02e3c341cbb5.webp',
      '/products/472b1a2a-dd08-492a-8fd8-62c9391a46a7.webp',
      '/products/85034c00-eca6-446d-9856-dc785ca4dbea.webp',
      '/products/9184984f-64d3-4bd5-b9c8-23ea9be1bce1.webp',
      '/products/c2f193d8-09b7-4b5f-bbc8-062e281c755c.webp',
      '/products/dfdd68bd-89e4-4960-a0bb-22aef6a0549f.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'Intel Core i3' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '256 GB' },
      { name: 'Tamaño de pantalla:', value: '14"' },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: '3.5 mm, hdmi, usb' },
      { name: 'Conectividad:', value: 'wifi, bluetooth' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '14-DQ2502LA' },
      { name: 'Color:', value: 'plateado' },
      { name: 'Medidas (largo x ancho x alto):', value: '32.4 x 1.8 x 22.5 cm (cerrada)' },
      { name: 'Tarjeta de video:', value: 'intel uhd graphics' }
    ]
  },
  {
    slug: 'laptop-hp-14fq1011la-14-windows-11-home-amd-ryzen-5-8-gb-ram-256-gb-ssd-plata',
    name: "Laptop HP 14-FQ1011LA 14'' Windows 11 Home AMD Ryzen 5 8 GB RAM 256 GB SSD Plata",
    price: 16799,
    discount: null,
    category: Category.electronica,
    stock: 67,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.El diseño y tecnología de esta Laptop HP, van a hacer que sea tu mejor cómplice para entretenerte y trabajar, además de poder llevarla a todos lados gracias a su diseño práctico y ligereza.La pieza tecnológica cuenta con procesador AMD Ryzen 5 que se complementa con 8 GB de memoria RAM y 256 GB en estado sólido, elementos que logran el rápido inicio de la máquina. Mide 32.4 x 22.5 x 1.8 cm (cerrada).La pantalla es de 14" HD micro bordes y amplia gama de colores vibrantes para expresar lo mejor de ti, funciona con sistema operativo Windows 11 home y cuenta con gráficos AMD Radeon; integra conectividad wifi, bluetooth y entradas USB, HDMI y 3.5 mm. El diseño exterior es de color plata.Realiza trabajos con la eficiencia y rapidez de la Laptop HP. ¡Pídela en línea!',
    images: [
      '/products/0afded75-b67a-49fa-9574-40b5e115e976.webp',
      '/products/56b80c75-c1f6-4908-9d34-5002c55e2ff0.webp',
      '/products/c49e2eba-652b-4c96-81e5-e9a65246c016.webp',
      '/products/62b6afa5-098c-4d83-99cd-beb3def88f92.webp',
      '/products/2cb9070e-ff19-4eb8-a625-a68500044a08.webp',
      '/products/ba45a23b-d960-44b7-98ab-b56ab19d1c2f.webp',
      '/products/90528eb2-b804-47a7-ab1a-35392b99a593.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'amd ryzen 5' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '256 GB' },
      { name: 'Tamaño de pantalla:', value: '14"' },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: 'hdmi, usb, 3.5 mm' },
      { name: 'Conectividad:', value: 'bluetooth, wifi' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '14-FQ1011LA' },
      { name: 'Color:', value: 'plata' },
      { name: 'Medidas (largo x ancho x alto):', value: '32.4 x 22.5 x 1.8 cm (cerrada)' }
    ]
  },
  {
    slug: 'laptop-hp-15ef2519la-156-windows-11-home-amd-ryzen-5-8gb-ram-512-gb-ssd-plateada--mouse-y-funda-reversible',
    name: 'Laptop HP 15-EF2519LA 15.6" Windows 11 Home AMD Ryzen 5 8GB RAM 512 GB SSD Plateada + Mouse y Funda Reversible',
    price: 18499,
    discount: null,
    category: Category.electronica,
    stock: 65,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Trabajar y estudiar es muy fácil con la ayuda de esta laptop HP modelo 15-EF2519LA, una excelente opción para ti.Este modelo tiene un procesador AMD Ryzen 5 y 8 GB de memoria RAM que la hacen muy rápida para que puedas realizar todas tus actividades sin problemas. Cuenta con 512 GB de almacenamiento en estado sólido y una tarjeta de video AMD Radeon.Déjate encantar por su pantalla HD de 15.6 pulgadas de bordes delgados donde verás imágenes claras y brillantes. Cuenta con un sistema operativo Windows 11 Home. Su diseño en color plateado la hace muy elegante, incluye un lector de huella para que puedas maximizar la privacidad. Incluye mouse de color negro y funda reversible. Mide 35.8 x 24.2 x 1.79 cm (cerrada).Disfruta mientras haces todas tus actividades con esta laptop HP, pídela en Coppel.com hoy mismo.',
    images: [
      '/products/eb65141d-8c20-42c2-b7b5-0827112ad7d1.webp',
      '/products/b84b34a7-512d-40f7-b34e-4b11bf0f1991.webp',
      '/products/6d023223-406b-4c0a-b1be-845682c37509.webp',
      '/products/3e4f1539-c06e-4d6b-b177-f1fd4cf4b76c.webp',
      '/products/d1bd3013-33a4-4586-9448-9013631751b6.webp',
      '/products/a85787a6-bc5a-4bea-9abe-34e4b1a97c5e.webp',
      '/products/945a7a6a-bb5d-4148-af41-988d458251a2.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'amd ryzen 5' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '512 GB' },
      { name: 'Tamaño de pantalla:', value: '15.6"' },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: 'hdmi, usb, 3.5 mm' },
      { name: 'Conectividad:', value: 'bluetooth, wifi' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '15-EF2519LA' },
      { name: 'Color:', value: 'plata' },
      { name: 'Medidas (largo x ancho x alto):', value: '35.8 x 24.2 x 1.79 cm (cerrada)' }
    ]
  },
  {
    slug: 'pantalla-led-daewoo-32-hd-smart-tv-daw32r',
    name: 'Pantalla LED Daewoo 32" HD Smart TV DAW32R',
    price: 4499,
    discount: null,
    category: Category.electronica,
    stock: 224,
    description:
      'Todo lo que necesitas saber sobre pantallas, dando clic aquí.Prepárate para ver maratones de todas tus series y películas favoritas con la mejor calidad y desde la comodidad de tu casa, con la pantalla LED marca Daewoo.Esta pantalla modelo DAW32R tiene una definición HD que te permitirá apreciar los detalles más nítidos, además de contar con un sistema operativo Roku TV y resolución 1080 x 720.Su compatibilidad de conexión es con entradas: 2 HDMI y 1 USB, lo que la hace versátil con numerosos dispositivos. También cuenta con bocinas traseras.Convierte tu hogar en un moderno espacio al adquirir esta pantalla Daewoo; anímate con tan solo unos cuantos clics.',
    images: [
      '/products/ae0fc3ed-5cea-4491-ac9b-e5763c1ac5ec.webp',
      '/products/13a5dd4c-3395-4306-a1e6-d6083aaaae8a.webp',
      '/products/2a95b4e0-bc99-498c-91f2-56ca832047a6.webp',
      '/products/e1002e7b-a1d5-40c7-a4be-887bea24434d.webp'
    ],
    properties: [
      { name: 'Funciones:', value: 'smart tv' },
      { name: 'Sistema Operativo:', value: 'roku tv' },
      { name: 'Pulgadas:', value: '32"' },
      { name: 'Resolución de pantalla:', value: 'HD' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Resolución en pixeles:', value: '1366 x 768' },
      { name: 'Diseño de pantalla:', value: 'led' },
      { name: 'Puertos/Entradas/Salidas:', value: '1 USB, 2 HDMI' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Marca:', value: 'DAEWOO' },
      { name: 'Modelo #:', value: 'DAW32R' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'laptop-hp-15dy2508la-156-windows-11-home-intel-core-i3-8-gb-ram-512-gb-ssd-plateado--mouse-y-funda-reversible',
    name: 'Laptop HP 15-DY2508LA 15.6" Windows 11 Home Intel Core i3 8 GB RAM 512 GB SSD Plateado + Mouse y Funda Reversible',
    price: 15699,
    discount: null,
    category: Category.electronica,
    stock: 134,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Esta laptop HP modelo 15-DY2508LA es ideal para que la uses en la escuela o la oficina, ya que es una combinación perfecta entre diseño y tecnología.Cuenta con un procesador Intel Core i3, memoria RAM de 8 GB y un sistema operativo Windows 11 Home, esto te brinda un funcionamiento rápido. Tiene una pantalla FHD de 15.6 pulgadas donde puedes ver imágenes de alta calidad, además está equipada con una tarjeta de video Intel UHDTiene una capacidad de almacenamiento de 512 GB en estado sólido. Gracias a su conectividad Wi-Fi y Bluetooth te mantienes en línea en todo momento. Cuenta con entradas USB, HDMI y 3.5 mm. Este diseño en color plateado tiene un toque muy moderno. Incluye funda reversible y mouse de color negro. Sus medidas son 36.02 x 23.4 x 1.79 cm (cerrada).¡Da unos cuantos clics y coloca esta laptop HP en tu carrito de compras!',
    images: [
      '/products/39ca67e6-2360-479b-b75f-9b22a332c90c.webp',
      '/products/6d8d8685-0c2d-40d2-a3f3-cb023bff6939.webp',
      '/products/28553a3f-cd62-4c9a-b355-63e956442b3c.webp',
      '/products/fd6a3cf3-a2ce-432f-8ff1-71c6a0be5a0f.webp',
      '/products/50b52e2f-e0da-468a-979f-13c3bcff4617.webp',
      '/products/97248ff5-77bb-4f13-8958-3ac8c30f1eb1.webp',
      '/products/b0a2e638-a043-479e-8f8b-2130a0fe74c3.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'Intel Core i3' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '512 GB' },
      { name: 'Tamaño de pantalla:', value: '15.6"' },
      { name: 'Tecnología de pantalla:', value: 'fhd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: '3.5 mm, hdmi, usb' },
      { name: 'Conectividad:', value: 'wifi, bluetooth' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '15-DY2508LA' },
      { name: 'Color:', value: 'plateado' },
      { name: 'Medidas (largo x ancho x alto):', value: '36.02 x 23.4 x 1.79 cm (cerrada)' }
    ]
  },
  {
    slug: 'pantalla-led-daewoo-40-full-hd-smart-tv-daw40hs',
    name: 'Pantalla LED Daewoo 40" Full HD Smart TV DAW40HS',
    price: 6999,
    discount: 17,
    category: Category.electronica,
    stock: 22,
    description:
      'Todo lo que necesitas saber sobre pantallas, dando clic aquí.La nueva propuesta para tu entretenimiento. Esta pantalla LED Daewoo DAW40HS llega para lograr convertir tu sala en un magnífico centro de entretenimiento.Es una pantalla LED de 40", con calidad Full HD, y funciones propias de una Smart TV. Cuenta con el sistema operativo Linux, pensado para que puedas navegar entre aplicaciones conectadas a internet.Tiene 2 entradas HDMI y dos entradas USB para que puedas conectar otros dispositivos, y de esta manera disfrutar de una mejor calidad de imagen. ¡Genial!',
    images: [
      '/products/9d722721-7ab8-4b17-a816-0a7d3c944807.webp',
      '/products/f166fe28-39cc-4874-a2ec-5e9892fdb55f.webp',
      '/products/1bf1f9dc-d61f-4bd2-9728-7fc7867c3a23.webp',
      '/products/01b3a2d5-4041-4a3c-b193-72770de50ba7.webp',
      '/products/2a8b5c2b-8145-455c-a217-a44defeaa934.webp'
    ],
    properties: [
      { name: 'Funciones:', value: 'smart tv' },
      { name: 'Sistema Operativo:', value: 'linux' },
      { name: 'Pulgadas:', value: '40"' },
      { name: 'Resolución de pantalla:', value: 'FULL HD' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Resolución en pixeles:', value: '1920 x 1080' },
      { name: 'Diseño de pantalla:', value: 'plana' },
      { name: 'Puertos/Entradas/Salidas:', value: '2 entradas HDMI, 2 entradas usb' },
      { name: 'Smart:', value: 'sí' },
      { name: 'Marca:', value: 'DAEWOO' },
      { name: 'Modelo #:', value: 'DAW40HS' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'laptop-hp-14fq1004la-14-windows-11-home-amd-ryzen-3-8-gb-ram-512-gb-ssd-plata',
    name: 'Laptop HP 14-FQ1004LA 14" Windows 11 Home AMD Ryzen 3 8 GB RAM 512 GB SSD Plata',
    price: 14599,
    discount: null,
    category: Category.electronica,
    stock: 36,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Si buscas una computadora portátil de gran capacidad, esta laptop HP modelo 14-FQ1004LA con memoria RAM de 8 GB, te permitirá trabajar, navegar por internet y realizar múltiples tareas con gran rapidez.Cuenta con una unidad de estado sólido de 512 GB, mientras que trabaja con procesador AMD Ryzen 3, complementos que garantizan un inicio rápido de la máquina. Posee un sistema operativo Windows 11 Home y gráficos AMD Radeon. Este modelo color plata, viene con una pantalla de 14 pulgadas, conectividad: WiFi + Bluetooth, entradas USB, HDMI y 3.5 mm. Mide 32.4 x 22.5 x 1.8 cm (cerrada).Adquiere hoy mismo esta laptop HP; añádela a tu carrito y con un par de clics finalizas tu compra.',
    images: [
      '/products/edbb888c-d45f-4d6c-81c8-8e9cf2750c61.webp',
      '/products/43fec8c1-32f5-4296-b8e0-10ccdf2b05c5.webp',
      '/products/9077ec43-ba38-49f9-9b70-ded15844d128.webp',
      '/products/4b3f5f40-3934-44cd-80b8-f63f9b7a7b32.webp',
      '/products/9763e694-a73a-4381-acf9-ffcde6e67097.webp',
      '/products/1429edd2-78e2-4cc2-976e-43e24b0db659.webp',
      '/products/365f0b4e-30e8-48f0-a119-c21e6cdd1499.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'amd ryzen 3' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '512 GB' },
      { name: 'Tamaño de pantalla:', value: '14"' },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: '3.5 mm, hdmi, usb' },
      { name: 'Conectividad:', value: 'wifi, bluetooth' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '14-FQ1004LA' },
      { name: 'Color:', value: 'plateado' },
      { name: 'Medidas (largo x ancho x alto):', value: '32.4 x 22.5 x 1.8 cm (cerrada)' }
    ]
  },
  {
    slug: 'laptop-hp-14-windows-11-intel-core-i3-8-gb-ram-256-gb-ssd-azul--mouse-inalmbrico--funda-protectora-reversible',
    name: 'Laptop HP 14" Windows 11 Intel Core i3 8 GB RAM 256 GB SSD Azul + Mouse Inalámbrico + Funda Protectora Reversible',
    price: 13899,
    discount: null,
    category: Category.electronica,
    stock: 126,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Diviértete o trabaja desde tu nueva laptop HP, modelo 14-DQ2521LA, la cual presume un atractivo diseño color azul, con una pantalla de 14 pulgadas y batería de larga duración, perfecta para mantenerte en movimiento. Este equipo tiene un sistema operativo Windows 11 Home, procesador gráfico Intel UHD y un procesador Intel Core i3. Cuenta con 256 GB SSD y una memoria RAM de 8 GB, para que inicies tu laptop y tus aplicaciones en pocos segundos. Ahora es más fácil hacer muchas tareas a la vez. Mide 32.4 x 22.5 x 1.8 cm (cerrada).Se conecta a Wi-Fi y Bluetooth. Posee entradas USB, HDMI y 3.5 mm. Además, incluye mouse inalámbrico y funda protectora reversible. ¡Hazla tuya con unos cuantos clics aquí mismo!',
    images: [
      '/products/33e793f3-8bd9-4e1c-9f8d-20b1d6fc81fe.webp',
      '/products/81453a4c-283f-4f9c-a138-3759bf2c8ec4.webp',
      '/products/35ec1c0a-e2f8-4a5b-89aa-791ea8eec983.webp',
      '/products/4809e4ed-c550-4e2e-a701-1983d10c4089.webp',
      '/products/3c0c4957-508b-4a8c-8cf6-2a7e62ca335c.webp',
      '/products/9eeea50e-a045-405d-8631-a9891ce5abdc.webp',
      '/products/e668f0b1-c328-48bc-8da6-6322749f71fe.webp',
      '/products/5a57aefa-d1ef-422b-a2be-539c66e24385.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'Intel Core i3' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '256 GB' },
      { name: 'Tamaño de pantalla:', value: '14"' },
      { name: 'Tecnología de pantalla:', value: 'hd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: '3.5 mm, hdmi, usb' },
      { name: 'Conectividad:', value: 'wifi, bluetooth' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '14-DQ2521LA' },
      { name: 'Color:', value: 'azul' },
      { name: 'Medidas (largo x ancho x alto):', value: '32.4 x 22.5 x 1.8 cm (cerrada)' }
    ]
  },
  {
    slug: 'tablet-samsung-smp613nzaumxo-104-64-gb-wifi-android-11-4-gb-gris',
    name: 'Tablet Samsung SM-P613NZAUMXO 10.4" 64 GB Wifi Android 11 4 GB Gris',
    price: 10999,
    discount: null,
    category: Category.electronica,
    stock: 28,
    description:
      'Esta increíble tablet de la marca Samsung es la ideal para que realices tus tareas y trabajos, gracias a su pantalla de 10.4".Se trata de un equipo con un diseño en color gris, cuenta con memoria RAM de 4 GB y una capacidad de almacenamiento de 64 GB, también tiene un procesador QC SM7125, características que te brindan una buena fluidez y potencia.Incluye una cámara frontal de 5 mp y una trasera de 8 mp. Adquiere la tablet Samsung con unos cuantos clics ¡Aquí mismo!',
    images: [
      '/products/a565becb-0e38-4c68-9208-5491e24af902.webp',
      '/products/77df1b1e-c937-40a3-9844-8d48ead09f6e.webp',
      '/products/6c90208a-ca70-43fb-876d-1addfc79d913.webp',
      '/products/d833554c-8db0-4657-aa18-068c5e09c5cb.webp',
      '/products/aefe5115-10bd-439a-bed0-515e43268a75.webp'
    ],
    properties: [
      { name: 'Tamaño de pantalla:', value: '10.4"' },
      { name: 'Sistema Operativo:', value: 'android' },
      { name: 'Capacidad de almacenamiento/ memoria interna:', value: '64 GB' },
      { name: 'Memoria RAM:', value: '3 GB - 4 GB' },
      { name: 'Procesador:', value: 'qc sm7125' },
      { name: 'Cámara frontal:', value: '5 mp' },
      { name: 'Cámara trasera:', value: '8 mp' },
      { name: 'Color:', value: 'gris' },
      { name: 'Tecnología:', value: 'bluetooth, wi-fi' },
      { name: 'Modelo:', value: 'SM-P613NZAUMXO GRIS' },
      { name: 'Marca:', value: 'SAMSUNG' }
    ]
  },
  {
    slug: 'laptop-hp-14dq252la-14-windows-11-home-intel-core-i5-8-gb-ram-256-gb-ssd-plateada--mouse-y-maletn',
    name: 'Laptop HP 14-DQ252LA 14" Windows 11 Home Intel Core i5 8 GB RAM 256 GB SSD Plateada + Mouse y Maletín',
    price: 17999,
    discount: null,
    category: Category.electronica,
    stock: 98,
    description:
      '¿Sabes qué laptop te conviene? Da clic aquí, y aprende más sobre ellas.Diviértete o trabaja desde tu nueva laptop HP, modelo 14-DQ2522LA, la cual presume un atractivo diseño color plateado, con una pantalla de 14 pulgadas.Este equipo cuenta con gráficos Intel Irix XE. Tiene un sistema operativo Windows 11 Home y un procesador Intel Core i5. Mientras que cuenta con un disco en estado sólido de 256 GB y una memoria RAM de 8 GB inicia tu laptop y aplicaciones en pocos segundos, ahora es más fácil hacer muchas tareas a la vez.Se conecta a Wi-Fi y Bluetooth. Posee entradas USB, HDMI y 3.5 mm en los laterales y, además, cuenta con lector de huella para maximizar la privacidad. Sus medidas son 32.4 x 22.5 x 1.8 cm (cerrada). ¡Hazla tuya con unos cuantos clics aquí mismo!Incluye maletín y mouse.',
    images: [
      '/products/be0e9846-5c3a-44fa-8f07-dbf3e94a337f.webp',
      '/products/b7d5de9b-0a28-41a1-9e17-aca7e85225d7.webp',
      '/products/cea18cf2-3f41-490f-9c24-5e5cc01317de.webp',
      '/products/fff31856-4df5-4627-9d7c-2fc7a62a955c.webp',
      '/products/fe0887f8-ff9f-4dd3-b526-c0d540b668a2.webp',
      '/products/2264d447-b732-4958-9a1e-eea6bac0136c.webp',
      '/products/be7b6912-7b44-4555-8ab0-0fedf29672b2.webp'
    ],
    properties: [
      { name: 'Procesador:', value: 'intel core i5' },
      { name: 'Memoria RAM:', value: '8 GB' },
      { name: 'Unidad de Estado Solido:', value: '256 GB' },
      { name: 'Tamaño de pantalla:', value: '14"' },
      { name: 'Tecnología de pantalla:', value: 'fhd' },
      { name: 'Sistema Operativo:', value: 'windows' },
      { name: 'Versión del sistema operativo:', value: '11' },
      { name: 'Entradas:', value: 'hdmi, usb, 3.5 mm' },
      { name: 'Conectividad:', value: 'bluetooth, wifi' },
      { name: 'Marca:', value: 'HP' },
      { name: 'Modelo #:', value: '14-DQ2522LA' },
      { name: 'Color:', value: 'plateado' },
      { name: 'Medidas (largo x ancho x alto):', value: '32.4 x 22.5 x 1.8 cm (cerrada)' }
    ]
  },
  {
    slug: 'multifuncional-canon-de-tinta-continua-g2110',
    name: 'Multifuncional Canon de Tinta Continua G2110',
    price: 4199,
    discount: null,
    category: Category.electronica,
    stock: 43,
    description:
      '"Da clic, ¡y consulta la compatibilidad de tu impresora!Imprime, escanea y saca copias desde la comodidad de tu hogar con esta multifuncional Canon G2110. Es una impresora multifuncional, que cuenta con un sistema de tinta continua, y puedes conectar una USB para imprimir los archivos. El rendimiento de la tinta a blanco y negro es de hasta 6,000 páginas, mientras que el rendimiento a color es de hasta 7,000. Tiene una pantalla LCD de 3.05 cm, y la velocidad en ipm es de 8.8 a blanco y negro y de 5.0 a color. Además, incluye 4 tintas para que comiences a usarla desde el primer día que llega a casa. ¡Adquiérela con unos cuantos clics! "',
    images: [
      '/products/4cb5cc22-0339-4f1a-bf6c-86299189d78e.webp',
      '/products/e65239f2-6952-4f8c-aed4-87050580e258.webp',
      '/products/16a900ef-5c27-4a16-b67a-e5ab94a29a93.webp',
      '/products/81bc5aef-755d-48d7-8e77-46e0cdf66495.webp',
      '/products/01042025-ffa9-4688-ad9d-ba2f8a34826b.webp',
      '/products/1add56f2-dd03-4d31-b60e-0e6c12a12b09.webp',
      '/products/c4b4d131-1be1-423d-bdd0-28c0a386470a.webp'
    ],
    properties: [
      { name: 'Función:', value: 'copiar, escanear, imprimir' },
      { name: 'Conectividad:', value: 'usb' },
      {
        name: 'Resolución máxima de impresión:',
        value: 'hasta 4800 x 1200 dpi a color, 600 x 600 dpi a blanco y negro'
      },
      { name: 'Velocidad de impresión:', value: '5.0 ipm a color, 8.8 ipm a blanco y negro' },
      { name: 'Tipo de inyección:', value: 'tinta continua' },
      { name: 'Tipo de impresión:', value: 'color, blanco y negro' },
      { name: 'Contenido de la caja:', value: '4 botellas de tinta, cable de alimentación' },
      {
        name: 'Otra información:',
        value:
          'rendimiento de hasta 6,000 páginas en blanco y negro, rendimiento de hasta 7,000 páginas a color'
      },
      { name: 'Marca:', value: 'CANON' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'pantalla-led-daewoo-32-hd-daw32h',
    name: 'Pantalla LED Daewoo 32" HD DAW32H',
    price: 4499,
    discount: 11,
    category: Category.electronica,
    stock: 89,
    description:
      'Por sus imágenes de gran calidad y fácil manejo, la pantalla Daewoo modelo DAW32H es ideal para tu entretenimiento.Gracias a su tecnología LED y definición HD aprecias mejor la luminosidad de colores de tus contenidos. Además de tener un diseño moderno, cuenta con bocinas traseras, 3 entradas HDMI y una USB, lo que la hace aún más funcional al permitirte conectar tus dispositivos. Tiene medidas de 73.1 x 6.7 x 43.1 cm.Esta es la pantalla de 32" que necesitas y con la que tus horas de entretenimiento serán ilimitadas. ¡Dale el sí a esta televisión Daewoo!Todo lo que necesitas saber sobre pantallas, dando clic aquí.',
    images: [
      '/products/8777ebe4-0a2a-48a8-a5d1-bfa4218fe9c6.webp',
      '/products/fe81cf9f-668f-4083-b69b-019d52058611.webp',
      '/products/e64cf4c1-a359-4d13-b53f-6b2aa8e949c1.webp',
      '/products/7280dc52-9268-4b96-8551-a6b765756ce5.webp',
      '/products/fad0fadf-5587-4312-aaec-02823ca54838.webp'
    ],
    properties: [
      { name: 'Pulgadas:', value: '32"' },
      { name: 'Resolución de pantalla:', value: 'HD' },
      { name: 'Tecnología:', value: 'LED' },
      { name: 'Resolución en pixeles:', value: '1366 x 768' },
      { name: 'Hertz (velocidad de imagen):', value: '60 hz' },
      { name: 'Diseño de pantalla:', value: 'plana' },
      { name: 'Puertos/Entradas/Salidas:', value: '3 HDMI, 1 entrada USB' },
      { name: 'Smart:', value: 'no' },
      { name: 'Incluye:', value: 'control remoto' },
      { name: 'Marca:', value: 'DAEWOO' },
      { name: 'Modelo #:', value: 'DAW32H' },
      { name: 'Medidas (largo x ancho x alto):', value: '73.1 x 6.7 x 43.1 cm' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'batera-recargable-para-control-de-xbox-one-voltedge',
    name: 'Batería Recargable para Control de Xbox One Voltedge',
    price: 499,
    discount: 36,
    category: Category.videojuegos,
    stock: 110,
    description:
      'No detengas la diversión con esta batería recargable para control de Xbox One de la marca Voltedge, con la que puedes jugar al cargar. ¡Te encantará!Se trata de un artículo de color negro, el cual tiene una duración de hasta 20 horas de uso, y cuenta con cable USB, así como luz LED como indicador de carga.¡Esta batería recargable puede ser tuya con dar clic en el botón de comprar en coppel.com!',
    images: [
      '/products/de4ed313-83f6-4584-8d4c-d9aefd01b666.webp',
      '/products/b3d246a3-be07-4b0a-8e54-79f32213ac5b.webp',
      '/products/3239d247-914e-4535-875a-87735138bbb7.webp',
      '/products/eb0d84b4-bc51-454f-aab8-08b0617d70de.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'VOLTEDGE' },
      { name: 'Exclusivo en línea:', value: 'Exclusivo en línea' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'negro' },
      { name: 'Modelo #:', value: 'X1 BX10 CHARGE KIT' },
      { name: 'Compatibilidad:', value: 'xbox one' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'audfonos-y-accesorios-para-playstation-4-nyko',
    name: 'Audífonos y Accesorios para PlayStation 4 Nyko',
    price: 889,
    discount: 10,
    category: Category.videojuegos,
    stock: 163,
    description:
      'Complementa tu consola PlayStation 4 con este increíble kit de accesorios Nyko. El paquete incluye una base de carga, audífonos de diadema, funda de control de silicón, 8 tapas de botón y un cable de carga con puerto USB.Los audífonos te permiten escuchar tanto audio de juego como de chat y cuentan con un micrófono ajustable con control de volumen en línea. La base de carga dual puede cargar 2 controles a la vez por medio del cable incluido.Anímate a hacer clic y pídelo en línea hoy mismo.',
    images: [
      '/products/0a2ef134-e282-4a50-a421-016577c2dd69.webp',
      '/products/d5b215b1-b473-4ab7-854c-1c52c889345a.webp',
      '/products/3d447a03-d470-4813-97cb-6b13dca51b93.webp',
      '/products/615366d7-9af8-4e7e-a7a4-74f0cd1cead5.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'NYKO' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'azul, negro' },
      { name: 'Modelo #:', value: '83260' },
      { name: 'Compatibilidad:', value: 'playstation 4' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'plants-vs-zombies-battle-for-neighborville-para-xbox-one',
    name: 'Plants vs Zombies: Battle for Neighborville para Xbox One',
    price: 1149,
    discount: 22,
    category: Category.videojuegos,
    stock: 35,
    description:
      '¿Estás preparado para una nueva batalla? Conoce todas las aventuras que te esperan con el videojuego Plants vs. Zombies: Battle for Neighborville.Cuentas con tres regiones abiertas y diferentes mapas en donde podrás explorar y realizar diversas misiones; conoce los nuevos personajes tanto de zombies y plantas de ataque, defensa y apoyo.Prepárate para luchar en seis modos multijugador online, una fin se semana repleto de adrenalina; adquiere este videojuego disponible para Xbox One.',
    images: [
      '/products/230b2844-fd3b-4ec8-8443-d0c9add95765.webp',
      '/products/ee2dc243-d7cf-4a53-bca4-74b4affdce9f.webp',
      '/products/b797de0d-6872-43a9-8be9-dde269d21380.webp',
      '/products/a82e3198-c241-4aab-a627-605dd44a19df.webp',
      '/products/9576b372-ab1f-4aeb-b945-3691559197d3.webp',
      '/products/7d69dad9-e85c-4c60-aba2-b00fbe6323e7.webp',
      '/products/60f687d5-ba32-4240-839f-559b19e3f987.webp'
    ],
    properties: [
      { name: 'Título:', value: 'plants vs. zombies: battle for neighborville' },
      { name: 'Plataforma:', value: 'xbox one' },
      { name: 'Clasificación:', value: 'clasificación B (E 10+ de la ESRB)' },
      { name: 'Género:', value: 'acción' },
      { name: 'Marca:', value: 'MICROSOFT' },
      { name: 'Desarrolladora:', value: 'popcap games' },
      { name: 'Número de jugadores:', value: '1 - multijugador' },
      { name: 'Videojuegos incluidos:', value: 'plants vs. zombies: battle for neighborville' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'control-hori-para-nintendo-switch',
    name: 'Control Hori para Nintendo Switch',
    price: 999,
    discount: 26,
    category: Category.videojuegos,
    stock: 9,
    description:
      'Para que cuando tus amigos vayan a tu casa a jugar videojuegos, ninguno se quede fuera, prepárate con un control extra. Para eso, la marca Hori trae este modelo para ti. Es un control alámbrico, con un increíble diseño color rojo con negro, el cual presenta sticks analógicos dobes sesgados. Es ideal para la consola Nintento Switch.Consigue en Coppel.com este control Hori. ¡Súmalo a tu carrito de compras y llévatelo a casa hoy mismo!',
    images: [
      '/products/d7a1e485-c85b-416d-86d6-f10782208142.webp',
      '/products/a19f7e18-d5eb-419b-8db0-557ae62cd715.webp',
      '/products/50a61a83-3261-44d7-a34e-35ef55af057f.webp',
      '/products/94cf8d0f-888e-4b6f-bb74-d898fe5229ff.webp',
      '/products/9dfefb07-e2f4-4048-8c6f-53b7fd666826.webp',
      '/products/00b7db62-d71d-4a89-9c91-22f654561d40.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'HORI' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'negro, rojo' },
      { name: 'Tipo de conexión:', value: 'alámbrico' },
      { name: 'Compatibilidad:', value: 'nintendo switch' },
      { name: 'Modelo #:', value: 'NSW-156U' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'control-almbrico-para-nintendo-switch-hori-azul-nuevo',
    name: 'Control Alámbrico para Nintendo Switch Hori Azul Nuevo',
    price: 999,
    discount: 26,
    category: Category.videojuegos,
    stock: 158,
    description:
      'Pasa horas de diversión en compañía de tus amigos, con este control de la marca Hori todos pueden jugar juntos.Este modelo Horipad es de color azul con botones negros y cuenta con una conexión alámbrica, así como con stickcs analógicos dobles sesgados. Su diseño ergonómico te permite sujetarlo con comodidad. Es compatible con la consola Nintendo Switch.¡Pon este control alambrico Hori en tu carrito de compras con unos cuantos clics!',
    images: [
      '/products/ece45cc6-68a6-4389-91ed-b05e46fd39f0.webp',
      '/products/0e5cbf02-4cfd-428a-b09f-edf7473694d1.webp',
      '/products/f9bc418d-6d71-4846-bd69-6ddb8a5a8f03.webp',
      '/products/abe00511-d01a-4834-990c-5b554edb321b.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'HORI' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'azul' },
      { name: 'Tipo de conexión:', value: 'alámbrico' },
      { name: 'Compatibilidad:', value: 'nintendo switch' },
      { name: 'Modelo #:', value: 'NSW-155U' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'control-almbrico-para-ps4-nyko-negro-nuevo',
    name: 'Control Alámbrico para PS4 Nyko Negro Nuevo',
    price: 1199,
    discount: 17,
    category: Category.videojuegos,
    stock: 14,
    description:
      'Un gamer de corazón siempre buscará contar con los mejores complementos y accesorios para su consola, por eso este control de videojuegos Nyko te va a encantar.Fue diseñado para la PlayStation 4 (PS4), pero cuenta con compatibilidad universal por su cable USB. Es de color negro y cuenta botón con función turbo e iluminación led en 7 colores y 2 modos de luz. Presenta un diseño ergonómico, con 2 ventiladores.Este control Nyko se encuentra al alcance de un clic. ¡Consíguelo en Coppel.com!',
    images: [
      '/products/33d3d9e6-a80c-48cd-bebe-42501d850dc8.webp',
      '/products/0fc9b54b-bfef-4860-be9e-7de31d4b1beb.webp',
      '/products/16d3c5fb-b865-4424-aabd-2cb991a4ae7c.webp',
      '/products/67d6f13a-f3d3-4ace-8098-d963be6ecfc2.webp',
      '/products/a411ee43-69ba-42ce-bf64-b5f48504add9.webp',
      '/products/5c695dbe-97ce-4ceb-a853-d34fd690d1fe.webp',
      '/products/53da5d72-4bc0-45ff-b3ce-d54130880a6a.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'NYKO' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'negro' },
      { name: 'Tipo de conexión:', value: 'alámbrico' },
      { name: 'Compatibilidad:', value: 'playstation 4' },
      { name: 'Tipo de alimentación:', value: 'conexión usb' },
      { name: 'Modelo #:', value: '83255' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'resident-evil-2-para-xbox-one',
    name: 'Resident Evil 2 para Xbox One',
    price: 1799,
    discount: 52,
    category: Category.videojuegos,
    stock: 142,
    description:
      'Un clásico del terror pero ahora reimaginado. Sé testigo del Resident Evil 2 para consola Xbox One y vive una ráfaga de adrenalina, una narrativa apasionante y terrores inimaginables. Un mortal virus ataca a los habitantes de Raccon City, y zombies carnívoros deambulan por las calles, en busca de supervivientes. Este videojuego pertenece al género de disparos y terror. Las características mejoradas para Xbox One están sujetas al lanzamiento de una actualización de contenido.Vive una imagen espeluznante con zombies en cada esquina en definición 4K. Por su contenido, es apto para personas +18 según la clasificación de ESRB. Sé capaz de vencer tus propios miedos con este videojuego desarrollado por CAPCOM. Para llevártelo basta con que hagas clic.',
    images: [
      '/products/2e1653e7-c27b-4edb-a70b-7115f6b7cbc3.webp',
      '/products/2be9194b-7e78-40f7-9d43-0fff2bcfbdf9.webp',
      '/products/d5975eb4-1f10-4ad0-8383-c6e0b9946342.webp',
      '/products/59f73e8e-d009-4db0-94da-b56a997e72e9.webp',
      '/products/a79ee3f7-8a73-4377-9f38-627c813398e3.webp'
    ],
    properties: [
      { name: 'Título:', value: 'resident evil 2' },
      { name: 'Plataforma:', value: 'xbox one' },
      { name: 'Clasificación:', value: 'clasificación C (M de la ESRB)' },
      { name: 'Género:', value: 'disparos' },
      { name: 'Licencia:', value: 'resident evil' },
      { name: 'Marca:', value: 'CAPCOM' },
      { name: 'Desarrolladora:', value: 'capcom' },
      { name: 'Número de jugadores:', value: '1' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'tom-clancys-ghost-recon-breakpoint-para-xbox-one',
    name: "Tom Clancy's Ghost Recon: Breakpoint para Xbox One",
    price: 1799,
    discount: 50,
    category: Category.videojuegos,
    stock: 220,
    description:
      'Atrévete a vivir nuevas aventuras solo o con tus amigos con el videojuego Ghost Recon Breakpoint; explora el archipiélago Auroa y prepárate para nuevas misiones. Conviértete en un soldado de operaciones especiales de élite y lucha contra excompañeros que han creado máquinas letales; este juego de acción y disparos te permite pasar horas de diversión.Además, gracias a su diseño arquitectónico puedes vivir realmente entornos salvajes. Adquiere en coppel.com el videojuego Ghost Recon Breakpoint, ideal para consola Xbox One.',
    images: [
      '/products/5d5e904c-3758-407c-9781-042f9cafd123.webp',
      '/products/30d54310-9d4e-4bf1-99e1-bdace9834119.webp',
      '/products/d59cecaf-94e4-49e3-9fe8-d0ce8e0d16c0.webp',
      '/products/6d9167f1-ef62-40ee-aa93-1a110dcbb968.webp',
      '/products/cc625e55-2cd7-4f46-924b-c1d2a2f8a0e0.webp',
      '/products/a27b4fec-5db7-4c98-8d54-227acdfda47f.webp'
    ],
    properties: [
      { name: 'Plataforma:', value: 'xbox one' },
      { name: 'Clasificación:', value: 'clasificación C (M de la ESRB)' },
      { name: 'Género:', value: 'acción' },
      { name: 'Marca:', value: 'UBISOFT' },
      { name: 'Desarrolladora:', value: 'ubisoft paris' },
      { name: 'Número de jugadores:', value: '1, en línea: multijugador' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'control-almbrico-para-nintendo-switch-hori-negro-nuevo',
    name: 'Control Alámbrico para Nintendo Switch Hori Negro Nuevo',
    price: 1299,
    discount: 34,
    category: Category.videojuegos,
    stock: 148,
    description:
      'Juega con este compacto y liviano control alámbrico de la marca Hori, que está diseñado pensando en todos los jugadores.El control cuenta con dos sticks analógicos, un D-Pad y todos los botones esenciales para Nintendo Switch. Es de color negro con dorado y con detalles del personaje de Pikachu de la serie de Pokémon. Adquiere desde la comodidad de tu casa este control Hori y finaliza tu compra en línea con un par de clics.',
    images: [
      '/products/1673ae99-18f6-41f0-ad92-4eceedd36b66.webp',
      '/products/eb69974c-2d97-4ce0-9f7c-099e3ff566c9.webp',
      '/products/f971dfad-8731-4d69-b446-f47d0a577061.webp',
      '/products/89119dff-290c-4bb5-bbfb-5682dc57b2a3.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'HORI' },
      { name: 'Exclusivo en línea:', value: 'Exclusivo en línea' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'negro' },
      { name: 'Tipo de conexión:', value: 'alámbrico' },
      { name: 'Compatibilidad:', value: 'nintendo switch' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'fifa-20-para-playstation-4',
    name: 'FIFA 20 para PlayStation 4',
    price: 699,
    discount: 14,
    category: Category.videojuegos,
    stock: 85,
    description:
      'Prepara tu consola PS4 para recibir el videojuego FIFA 20; invita a tus amigos y pasen una tarde emocionante gritando ¡gol! La mecánica de juego te permite 3 modos: con el balón, podrás elegir tu objetivo y dispara en el momento exacto; sin el balón, domina con mayor precisión la defensa y ataque, ideal para los duelos uno contra uno; y el balón, ahora el esférico se mueve mejor que nunca tanto en el aire como en el suelo.Puedes personalizar o crear a tu mánager a tu gusto, es importante que antes de iniciar, tengas claro tu estrategia  y las decisiones que tomes en modo Carrera, pues serán cruciales en el rendimiento del equipo.Vive un realismo impresionante con FIFA 20 para PlayStation 4, elige a tus jugadores predilectos y gana la victoria. ¡Disponible en línea!',
    images: [
      '/products/7dfd2c38-8e5a-436f-b56b-4a3a86949b22.webp',
      '/products/5e7c0336-1f53-4d62-b4c0-7dc184513070.webp',
      '/products/708df0b1-359c-4ee3-98a0-a627aa9c0074.webp',
      '/products/a1b53d33-8caa-4585-a5c6-01ca94fc7c84.webp',
      '/products/850d500d-efed-4c2f-8c6d-beeaa1c3987a.webp',
      '/products/24d93ad2-4b3c-4ce8-8f11-c79fd5d8d4ea.webp',
      '/products/1ce69af7-861e-4f70-b8ba-0e6ef27426b6.webp'
    ],
    properties: [
      { name: 'Título:', value: 'fifa 20' },
      { name: 'Plataforma:', value: 'playstation 4' },
      { name: 'Clasificación:', value: 'clasificación A (E de la ESRB)' },
      { name: 'Género:', value: 'deportes' },
      { name: 'Licencia:', value: 'fifa' },
      { name: 'Marca:', value: 'SONY' },
      { name: 'Desarrolladora:', value: 'ea sports' },
      { name: 'Número de jugadores:', value: '1-4, multijugador' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'rage-2-the-crew-wild-run-edition-y-mass-effect-andromeda-para-xbox-360',
    name: 'Rage 2 The Crew: Wild Run Edition y Mass Effect: Andromeda para Xbox 360',
    price: 799,
    discount: 10,
    category: Category.videojuegos,
    stock: 161,
    description:
      '¡Para todos los gustos! Es hora de que te adentres al mundo de los vieojuegos con este pack: Rage 2, The Crew: Wild Run Edition y Mass Effect: Andromeda son los títulos que están listos para que la tarde esté llena de acción.Su clasificación es de disparos y acción, en donde la adrenalina es un ingrediente que te ayuda a maximizar los sentidos, mientras que la clasificación es para mayores de 15 años.¡Adquiérelo con unos cuantos clics!',
    images: [
      '/products/9fe08999-a46e-44e6-8f96-5df7bc22df05.webp',
      '/products/562450f5-819b-4ebe-a791-2df5b183e829.webp'
    ],
    properties: [
      { name: 'Título:', value: 'rage 2, the crew: wild run edition, mass effect: andromeda' },
      { name: 'Plataforma:', value: 'xbox 360' },
      { name: 'Exclusivo en línea:', value: 'Exclusivo en línea' },
      { name: 'Clasificación:', value: 'clasificación C (M de la ESRB)' },
      { name: 'Género:', value: 'acción' },
      { name: 'Licencia:', value: 'rage 2, the crew, mass effect' },
      { name: 'Marca:', value: 'MICROSOFT' },
      { name: 'Desarrolladora:', value: 'bethesda game studios, ea, ubisoft' },
      { name: 'Número de jugadores:', value: 'local: 1-2' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'cargador-de-mando-nyko-para-playstation-4',
    name: 'Cargador de Mando Nyko para PlayStation 4',
    price: 399,
    discount: 13,
    category: Category.videojuegos,
    stock: 144,
    description:
      '¡Siempre cargado! Usa tu nuevo cargador de mando Nyko 83237 para PS4 para que puedas disfrutar de horas de juego ininterrumpidas.Es una base individual, con el que puedes recargar un mando de PS4 con facilidad. Cuenta con una luz LED indicadora, para que revises cuanta carga le queda a la base. mientras que esta se alimenta por medio de USB.El mejor complemento para tus consolas de videojuegos los encuentras aquí mismo.',
    images: [
      '/products/521d3c87-8b40-4bc2-b350-67fb971337bc.webp',
      '/products/0f39686e-730b-4f06-9aaa-ca779cfef38d.webp',
      '/products/633fa6da-3b0a-4c81-975c-d69cb1c1b57c.webp',
      '/products/aba5b913-a554-4516-bec8-70c62d9aaf59.webp',
      '/products/c38046f9-0910-4a2c-b14f-fd5216e4676d.webp',
      '/products/18b3debe-22f7-4692-bf31-5127210e301e.webp',
      '/products/30775d7a-bb9c-471b-ab1d-6055d570657a.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'NYKO' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Modelo #:', value: '83237' },
      { name: 'Compatibilidad:', value: 'playstation 4' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'need-for-speed-heat-para-xbox-one',
    name: 'Need For Speed Heat para Xbox One',
    price: 1799,
    discount: 29,
    category: Category.videojuegos,
    stock: 243,
    description:
      'Que la adrenalina suba como agua al momento de tomar el control. Con Need For Speed Heat ahora tu eres el que tiene el mando.Se trata de algo tan fácil como recabar dinero para las mejoras de tu auto, compitiendo en carreras clandestinas en esecenarios épicos. Con gráficos totalmente definidos, vive una experiencia sin igual cuando manipulas al auto. Puedes jugar solo o en multijugador online. ¡Sé parte de la élite de las carreras con NFS Heat!',
    images: [
      '/products/36b89804-59dc-443f-a3ac-5bda280237a3.webp',
      '/products/776f8e27-5cba-4206-82ce-3e238e713de3.webp',
      '/products/d00d2748-18ab-4343-916c-350fb1761dc3.webp',
      '/products/ec79035d-2c9c-4f64-bfcf-d2f378d316f2.webp',
      '/products/d794665e-d854-4b2f-893b-d24921499114.webp'
    ],
    properties: [
      { name: 'Título:', value: 'need for speed heat' },
      { name: 'Plataforma:', value: 'xbox one' },
      { name: 'Clasificación:', value: 'clasificación B15 (T de la ESRB)' },
      { name: 'Género:', value: 'carreras, acción' },
      { name: 'Licencia:', value: 'need for speed' },
      { name: 'Marca:', value: 'EA' },
      { name: 'Desarrolladora:', value: 'ghost games' },
      { name: 'Número de jugadores:', value: '1 - multijugador' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'fifa-21-y-tom-clancys-the-division-2-pack-para-playstation-4',
    name: "FIFA 21 y Tom Clancy's: The Division 2 Pack para PlayStation 4",
    price: 899,
    discount: 10,
    category: Category.videojuegos,
    stock: 41,
    description:
      "¡Compra los mejores videojuegos para consola y consigue horas de entretenimiento y diversión! Este pack con la FIFA 21 y Tom Clancy's The Division 2 son ideales para esta tarea.Se trata de un par de juegos, compatibles con la consola Play Station 4. Con el famoso juego de fútbol que es apto para todo público, mientras que el Tom Clancy's que es de clasificación C, solo para mayores de 18 años. Este paquete te da variedad para que puedas elegir entre estilos distintos de videojuegos.Compra en línea este paquete con la FIFA 21 y el Tom Clancy's The Division 2 para PS4 y recíbelo hasta la puerta de tu casa.",
    images: [
      '/products/1fb66552-9e90-4a96-9767-d65612035bea.webp',
      '/products/79132c01-efa3-4d1b-b9db-4b86484ce94b.webp'
    ],
    properties: [
      { name: 'Título:', value: 'fifa 21' },
      { name: 'Exclusivo en línea:', value: 'Exclusivo en línea' },
      { name: 'Plataforma:', value: 'playstation 4' },
      { name: 'Clasificación:', value: 'clasificación C (M de la ESRB)' },
      { name: 'Género:', value: 'acción' },
      { name: 'Licencia:', value: "fifa, tom clancy's: the division" },
      { name: 'Desarrolladora:', value: 'ubisoft montreal, ea sports' },
      { name: 'Número de jugadores:', value: '1, multijugador' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'fifa-19-nba-live-19-y-soul-calibur-vi-para-xbox-one',
    name: 'FIFA 19, NBA Live 19 y Soul Calibur VI para Xbox One',
    price: 599,
    discount: 50,
    category: Category.videojuegos,
    stock: 228,
    description:
      'Llévate a casa este increíble trío de videojuegos, marca Moshinet, con los que vas a poder pasar horas de entretenimiento, jugando con tus amigos un rato de deportes y aventuras.Se trata de los videojuegos FIFA 19, NBA Live 19 y Soul Calibur VI, los dos primeros con temática deportiva y clasificación Everyone, mientras que el tercero es de peleas y está clasificada como Teen. Todos cuentan con modo de juego multijugador y son para Xbox One.¡Consíguelos hoy mismo en coppel.com! ¡Súmalos a tu carrito de compras y dale clic para finalizar tu pedido!',
    images: [
      '/products/4423c478-3756-4823-8f40-f2ecbc3a3c3b.webp',
      '/products/9400288d-f1ff-4bc7-886c-9311d6f434c1.webp'
    ],
    properties: [
      { name: 'Título:', value: 'nba live 19, soul calibur vi, fifa 19' },
      { name: 'Plataforma:', value: 'xbox one' },
      { name: 'Clasificación:', value: 'clasificación B15 (T de la ESRB)' },
      { name: 'Género:', value: 'peleas, deportes' },
      { name: 'Licencia:', value: 'nba, fifa' },
      { name: 'Marca:', value: 'MOSHINET' },
      { name: 'Desarrolladora:', value: 'ea sports, bandai namco' },
      { name: 'Número de jugadores:', value: 'multijugador' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'sistema-de-carga-para-controles-de-ps5-bionik-bnk9067',
    name: 'Sistema de Carga para Controles de PS5 Bionik BNK-9067',
    price: 749,
    discount: 32,
    category: Category.videojuegos,
    stock: 200,
    description:
      'Carga rápidamente tus controles para PlayStation 5 (PS5) con tu nuevo sistema de carga Bionik BNK-9067, con el que podrás poner a cargar dos Dual Sense al mismo tiempo.Este artículo electrónico es de color blanco con negro, cuenta con un diseño compacto y presume unos indicadores retroiluminados. Además, incluye un adaptador de corriente. ¡Es ideal para ti!Aduéñate de este sistema de carga Bionik con un clic. Hazlo tuyo desde la comodidad de tu casa al hacer tu compra a través de Coppel.com.',
    images: [
      '/products/f48828b4-a0f8-4800-842f-af4c7f9d2282.webp',
      '/products/7d6a72f7-58db-403d-a08d-035ebc25730d.webp',
      '/products/af9cd83f-5c5b-47b1-9e2c-7b58ad924d99.webp',
      '/products/e593a675-3f8d-42fc-84fb-4a82c5c4e3e9.webp',
      '/products/3e5bb61c-7fd4-48e6-8bac-a3d38227abbd.webp'
    ],
    properties: [
      { name: 'Exclusivo en línea:', value: 'Exclusivo en línea' },
      { name: 'Marca:', value: 'BIONIK' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'negro, blanco' },
      { name: 'Modelo #:', value: 'BNK-9067' },
      { name: 'Compatibilidad:', value: 'playstation 5' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'spyro-reignited-trilogy-para-xbox-one',
    name: 'Spyro Reignited Trilogy para Xbox One',
    price: 1349,
    discount: 26,
    category: Category.videojuegos,
    stock: 105,
    description:
      '¡La aventura se hace presente! Para que la emoción entre en tu vida requieres de tu nuevo videojuego Spyro Reignited Trilogy. Se trata de un estupendo juego del intrépido dragón morado que viene para que logres las mejores aventuras en varias plataformas. Es una apuesta para que vivas de mejor forma la experiencia. Viene disponible para la consola Xbox One, por lo que no puedes dejar pasar la oportunidad de jugarlo. ¡Adquiere el tuyo aquí mismo!',
    images: [
      '/products/6e5c7a39-2fec-4909-8df4-3deebd8a0100.webp',
      '/products/bda55c32-fe67-4f0a-9c43-48fc2ac5d557.webp',
      '/products/7947a25c-e6a5-48a9-9612-4691b0e4995b.webp',
      '/products/51ef6114-72fe-4cbb-931a-3602b718011f.webp',
      '/products/3cc2d290-8136-4003-b6f8-6c116c3d6907.webp',
      '/products/7f9c9c11-6b65-4bc5-8acb-a43ccc71da7d.webp',
      '/products/e77c768a-acac-4041-8663-edc134ab65fb.webp'
    ],
    properties: [
      { name: 'Título:', value: 'spyro reignited trilogy' },
      { name: 'Plataforma:', value: 'xbox one' },
      { name: 'Clasificación:', value: 'clasificación B (E 10+ de la ESRB)' },
      { name: 'Género:', value: 'aventura' },
      { name: 'Marca:', value: 'MICROSOFT' },
      { name: 'Desarrolladora:', value: 'toys for bob' },
      { name: 'Número de jugadores:', value: '1' },
      {
        name: 'Videojuegos incluidos:',
        value: 'spyro 2: en busca de los talismanes, spyro 3: el año del dragón, spyro el dragón'
      },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'spyro-reignited-trilogy-para-playstation-4',
    name: 'Spyro Reignited Trilogy para PlayStation 4',
    price: 1349,
    discount: 26,
    category: Category.videojuegos,
    stock: 30,
    description:
      "Para que la emoción entre en tu vida requieres de tu nuevo videojuego Spyro Reignited Trilogy, el videojuego perfecto para tu consola PS4.Con la misma actitud abrasadora, Spyro Reignited Trilogy recrea las tres grandes aventuras de la saga: Spyro the Dragon, Spyro 2: Ripto's Rage! y Spyro: Year of the Dragon, y te ofrece gráficos en increíble HD.Es una apuesta para que vivas de mejor forma la experiencia. ¡Adquiere el tuyo aquí mismo!",
    images: [
      '/products/e22b3a44-9cc8-43f4-a99a-02693b1ed70c.webp',
      '/products/ad4997e3-8362-4f21-8c81-dcf5f6929f7f.webp',
      '/products/d1fc6152-c9fb-4bbb-9cd8-06ea304888e4.webp'
    ],
    properties: [
      { name: 'Título:', value: 'spyro reignited trilogy' },
      { name: 'Plataforma:', value: 'playstation 4' },
      { name: 'Clasificación:', value: 'clasificación B (E 10+ de la ESRB)' },
      { name: 'Género:', value: 'aventura' },
      { name: 'Marca:', value: 'SONY' },
      { name: 'Desarrolladora:', value: 'toys for bob' },
      { name: 'Número de jugadores:', value: '1' },
      {
        name: 'Videojuegos incluidos:',
        value: 'spyro el dragón, spyro 2: en busca de los talismanes, spyro 3: el año del dragón'
      },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'prey-para-playstation-4',
    name: 'Prey para PlayStation 4',
    price: 1699,
    discount: 41,
    category: Category.videojuegos,
    stock: 225,
    description:
      '¡Lucha contra la invasión! En Prey tú eres la pieza clave de un experimento que pretende cambiar a la humanidad para siempre, pero todo se echó a perder. La estación espacial Talos I fue invadida por alienígenas que te están persiguiendo.Mientras te adentras cada vez más en los oscuros secretos de la Talos I, tu habilidad para sobrevivir a este ataque violento dependerá de tu ingenio, tus armas y tus increíbles destrezas. Disfrútalo en tu consola PlayStation 4.',
    images: [
      '/products/0879ac74-b0a3-416a-b95f-ae3c38852bcb.webp',
      '/products/b9980e0e-451d-4bfb-af5b-6cb65a1459ac.webp',
      '/products/49f954b5-50ec-48f5-bce7-50dc96cfde50.webp'
    ],
    properties: [
      { name: 'Título:', value: 'prey' },
      { name: 'Exclusivo en línea:', value: 'Exclusivo en línea' },
      { name: 'Plataforma:', value: 'playstation 4' },
      { name: 'Clasificación:', value: 'clasificación C (M de la ESRB)' },
      { name: 'Género:', value: 'aventura, acción' },
      { name: 'Marca:', value: 'BETHESDA' },
      { name: 'Desarrolladora:', value: 'arkane studios' },
      { name: 'Número de jugadores:', value: '1' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'fifa-20-para-xbox-one',
    name: 'FIFA 20 para Xbox One',
    price: 599,
    discount: null,
    category: Category.videojuegos,
    stock: 185,
    description:
      'Vive los momentos más apasionantes al tener en tu poder el videojuego FIFA 20 para Xbox One; el juego que te sacará de la rutina.Su mecánica de juego te permite 3 modos: con el balón, podrás elegir tu objetivo y dispara en el momento exacto; sin el balón, domina con mayor precisión la defensa y ataque, ideal para los duelos uno contra uno; y el balón, ahora se mueve mejor que nunca tanto en el aire como en el suelo.Puedes personalizar o crear a tu mánager a tu gusto, es importante que antes de iniciar, tengas claro tu estrategia y las decisiones que tomes en modo Carrera, serán cruciales en el rendimiento de equipo.Es momento de ser parte de un realismo impresionante en tu consola Xbox One ¡vive la adrenalina del futbol con FIFA 20! Adquiérelo en línea.',
    images: [
      '/products/09c0901a-8f2a-4a87-b118-0c16d380fa24.webp',
      '/products/76c2b122-56ee-49bd-b343-72d2735cc284.webp',
      '/products/254f2bc9-1f98-4ba4-b230-cadf9951bda6.webp',
      '/products/c7d31652-762b-42f7-8063-3478645ed303.webp',
      '/products/26c6bcb0-99c8-418a-ba9a-1fac5ad82eb0.webp',
      '/products/1d342175-ff69-4b9e-8126-744e9bbae19a.webp',
      '/products/cab75f54-07ea-46ca-8c91-4aa076a85863.webp'
    ],
    properties: [
      { name: 'Título:', value: 'fifa 20' },
      { name: 'Plataforma:', value: 'xbox one' },
      { name: 'Clasificación:', value: 'clasificación A (E de la ESRB)' },
      { name: 'Género:', value: 'deportes' },
      { name: 'Licencia:', value: 'fifa' },
      { name: 'Marca:', value: 'MICROSOFT' },
      { name: 'Desarrolladora:', value: 'ea sports' },
      { name: 'Número de jugadores:', value: '1, multijugador' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'doom-fifa-17-y-call-of-duty-infinite-warfare-para-playstation-4',
    name: 'Doom, FIFA 17 y Call of Duty: Infinite Warfare para PlayStation 4',
    price: 999,
    discount: 30,
    category: Category.videojuegos,
    stock: 114,
    description:
      '¡La mejor diversión está a tu alcance! Aprovecha la oportunidad de adquirir los mejores títulos con este combo de videojuegos para PS4. Se trata de Doom, la apuesta de acción monstruosa que te encantará disfrutar; Fifa 17, el titulo clásico que te dará momentos de gran adrenalina; y, Call of Duty: Infinite Warfare, la plataforma donde demostrarás lo valiente que eres. Sin duda tres grandes videojuegos que te darán grandes momentos de diversión. ¡Adquiere tu bundle pack PS4 aquí mismo!',
    images: [
      '/products/c90f4ec9-8919-4be0-8e1e-bdea3611be94.webp',
      '/products/fdd4eb80-0211-4f0a-a634-c1c9ade35795.webp',
      '/products/06cc6b83-9744-43ae-bc69-8309cadd4c8e.webp'
    ],
    properties: [
      { name: 'Título:', value: 'fifa 17, doom, call of duty: infinite warfare' },
      { name: 'Exclusivo en línea:', value: 'Exclusivo en línea' },
      { name: 'Plataforma:', value: 'playstation 4' },
      { name: 'Desarrolladora:', value: 'infinity ward, ea sports, id software, treyarch' },
      { name: 'Número de jugadores:', value: '1 - multijugador' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'cargador-de-mandos-nyko-para-playstation-5',
    name: 'Cargador de Mandos Nyko para PlayStation 5',
    price: 549,
    discount: null,
    category: Category.videojuegos,
    stock: 228,
    description:
      '¡Para jugar a todas horas! Alimenta los mandos de tu PS5 con este cargador Nyko 83302. Es una base dual, con la que puedes alimentar dos controles de manera fácil y rápida. Su tecnología permite una carga rápida que le da más tiempo de vida al control, además de que tiene una luz indicadora. Adquiérelo aquí mismo con unos cuantos clics. ¡Recuerda que llega a la puerta de tu hogar!',
    images: [
      '/products/1a962ae8-3e01-43dc-9811-33c015b40014.webp',
      '/products/356faf79-1116-42ce-851f-8d01f40f919d.webp',
      '/products/cb58c290-9461-4899-a8ae-533666919a6f.webp',
      '/products/9a2f9b11-8559-45c9-9d8f-8942d2654ec4.webp',
      '/products/726e2a9d-cdb4-4069-bb91-4d97549b4a76.webp',
      '/products/723c97a6-cda2-4824-b2e8-89a9bfe9424d.webp',
      '/products/2e32a871-86b1-4cbc-8ea4-26787dedd8d7.webp',
      '/products/0c18e1a5-5af2-44d6-9f7f-cc3696eba76c.webp',
      '/products/f5e61580-a5a2-4811-93a3-5a3b69eab5b3.webp',
      '/products/405df7da-bfc6-4e09-ab6c-df54c6fccfbc.webp',
      '/products/9a0f4d18-e296-46fb-bc57-3e2ac135385a.webp'
    ],
    properties: [
      { name: 'Marca:', value: 'NYKO' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'blanco' },
      { name: 'Modelo #:', value: '83302' },
      { name: 'Compatibilidad:', value: 'playstation 5' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'fifa-21-para-xbox-onexbox-series-x',
    name: 'FIFA 21 para Xbox One/Xbox Series X',
    price: 959,
    discount: 32,
    category: Category.videojuegos,
    stock: 147,
    description:
      '¡Todos a la cancha! Es hora de demostrar tus mejores jugadas con FIFA 21 para Xbox One/ Xbox Series X. En esta ocasión tenemos como jugador principal a Kylian Mbappé. Su modo de juego es en tercera persona, pueden jugar de 1 a 4 personas en consola, o multijugador en línea.Repite las tomas y jugadas más impresionantes, elige bien a tu equipo y que la adrenalina sea parte de la emoción. ¡Asombroso! Actualiza tu copia de FIFA 21 de PlayStation®4 o Xbox One para la consola de nueva generación equivalente (PlayStation®5 o Xbox Series X|S) sin costo adicional* y mantén todo el progreso y el contenido que conseguiste en FIFA 21 Ultimate Team y VOLTA FOOTBALL',
    images: [
      '/products/be45d8a5-9cdb-44d8-9abd-71b5b05a64cf.webp',
      '/products/9a59772d-076b-49fb-b55f-b5ef22c3c2a5.webp'
    ],
    properties: [
      { name: 'Título:', value: 'fifa 21' },
      { name: 'Plataforma:', value: 'xbox one, xbox series x' },
      { name: 'Clasificación:', value: 'clasificación A (E de la ESRB)' },
      { name: 'Género:', value: 'deportes' },
      { name: 'Licencia:', value: 'fifa' },
      { name: 'Marca:', value: 'EA' },
      { name: 'Desarrolladora:', value: 'ea sports' },
      { name: 'Número de jugadores:', value: '1, multijugador' },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  },
  {
    slug: 'estuche-de-accesorios-para-control-bionik-bnk9059-para-playstation-5',
    name: 'Estuche de Accesorios para Control Bionik BNK-9059 para PlayStation 5',
    price: 399,
    discount: null,
    category: Category.videojuegos,
    stock: 148,
    description:
      '¡Equipa de manera correcta tu consola de videojuegos y controles! Con este increíble estuche de accesorios para control de la marca Bionik en su modelo BNK-9059.Se trata de un estuche en color anaranjado que incluye dos juegos de tapas para gatillos para conservarlos de mejor manera, así como una herramienta de instalación y un set de fácil instalación y desmontaje para que puedas cambiarlos sin problema alguno, son compatibles con control de PlayStation 5.Compra en línea en Coppel.com este estuche de accesorios de la marca Bionik y cuida aún más tus controles de PS5.',
    images: [
      '/products/e32b9f8e-bbad-4e14-a159-bbb71e1b9b13.webp',
      '/products/7b86449b-fffb-48c1-a150-0e56ae5bdfa1.webp',
      '/products/86a51ae9-bacc-4ae1-bf3f-e4b063c9378e.webp',
      '/products/850f8cca-43dc-4ea6-b91b-a6e7709fe9a8.webp',
      '/products/afb5bbe4-22b3-49d8-a4d9-f00d6bb43c30.webp',
      '/products/6b6da6e1-dd5a-4275-b990-4f1b64f14acf.webp'
    ],
    properties: [
      { name: 'Exclusivo en línea:', value: 'Exclusivo en línea' },
      { name: 'Marca:', value: 'BIONIK' },
      { name: 'Condición:', value: 'nuevo' },
      { name: 'Color:', value: 'anaranjado, negro' },
      { name: 'Modelo #:', value: 'BNK-9059' },
      { name: 'Compatibilidad:', value: 'playstation 5' },
      {
        name: 'Incluye:',
        value: '2 juegos de tapas de gatillo, estuche para almacenaje, 1 herramienta de instalación'
      },
      { name: 'Promocion:', value: 'Oferta' }
    ]
  }
]
