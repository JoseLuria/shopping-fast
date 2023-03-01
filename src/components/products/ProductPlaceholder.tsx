const ProductPlaceholder = () => {
  return (
    <>
      {Array.apply(null, Array(15)).map(() => (
        <div class='animate-pulse'>
          <span class='block aspect-square bg-white rounded-lg bg-opacity-20' />
          <span class='block h-[100px]' />
        </div>
      ))}
    </>
  )
}

export default ProductPlaceholder
