export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const priceFrom = query.priceFrom ? Number(query.priceFrom) : undefined
  const priceTo = query.priceTo ? Number(query.priceTo) : undefined

  // Fetch products from dummyjson.com
  const response = await $fetch<{
    products: Array<{
      id: number
      title: string
      price: number
      thumbnail: string
      description: string
    }>
  }>("https://dummyjson.com/products?limit=100")

  let products = response.products

  // Calculate price range from all products
  const allPrices = response.products.map((p) => p.price)
  const priceRange = {
    min: Math.min(...allPrices),
    max: Math.max(...allPrices),
  }

  // Filter by price range if specified
  if (priceFrom !== undefined || priceTo !== undefined) {
    products = products.filter((product) => {
      const matchesMin = priceFrom === undefined || product.price >= priceFrom
      const matchesMax = priceTo === undefined || product.price <= priceTo
      return matchesMin && matchesMax
    })
  }

  return { products, priceRange }
})
