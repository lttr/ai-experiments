<template>
  <div class="product-list">
    <h2>Products</h2>

    <nav class="filters">
      <NuxtLink to="/?priceFrom=10&priceTo=40" class="filter-link">Filter $10-$40</NuxtLink>
      <NuxtLink to="/" class="filter-link">Reset filter</NuxtLink>
    </nav>

    <div v-if="pending" class="loading">Loading products...</div>

    <div v-else-if="error" class="error">
      Failed to load products: {{ error.message }}
    </div>

    <div v-else-if="data?.products.length === 0" class="empty">
      No products found in this price range.
    </div>

    <ul v-else class="products">
      <li v-for="product in data?.products" :key="product.id" class="product-card">
        <img :src="product.thumbnail" :alt="product.title" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">${{ product.price.toFixed(2) }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Read query params from URL
const priceFrom = computed(() => route.query.priceFrom as string | undefined)
const priceTo = computed(() => route.query.priceTo as string | undefined)

// Fetch products with price filtering
const { data, pending, error } = await useFetch('/api/products', {
  query: {
    priceFrom,
    priceTo
  },
  watch: [priceFrom, priceTo]
})
</script>

<style scoped>
.product-list {
  padding: 0.5rem;
}

.loading,
.error,
.empty {
  padding: 1rem;
  text-align: center;
  font-size: var(--font-size-0);
}

.error {
  color: var(--red-6);
}

.filters {
  display: flex;
  gap: 0.75rem;
  margin: 1rem 0 1.5rem;
  padding: 0.75rem;
  background: var(--surface-2);
  border-radius: var(--radius-2);
}

.filter-link {
  padding: 0.5rem 1rem;
  background: var(--surface-1);
  border: 1px solid var(--surface-3);
  border-radius: var(--radius-2);
  color: var(--text-1);
  text-decoration: none;
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-4);
  transition: all 0.2s ease;
}

.filter-link:hover {
  background: var(--surface-2);
  border-color: var(--indigo-5);
  box-shadow: var(--shadow-2);
}

.filter-link.router-link-active {
  background: var(--indigo-6);
  color: var(--surface-1);
  border-color: var(--indigo-6);
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.product-card {
  border: 1px solid var(--gray-4);
  border-radius: var(--radius-2);
  padding: 0.75rem;
  background: var(--gray-0);
  box-shadow: var(--shadow-2);
  transition: all 0.2s ease;
  cursor: pointer;
}

.product-card:hover {
  box-shadow: var(--shadow-4);
  transform: translateY(-2px);
  border-color: var(--indigo-4);
}

.product-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: var(--radius-2);
  margin-bottom: 0.5rem;
  background: var(--gray-2);
}

.product-title {
  font-size: var(--font-size-00);
  font-weight: var(--font-weight-4);
  margin: 0 0 0.25rem 0;
}

.product-price {
  font-size: var(--font-size-00);
  font-weight: var(--font-weight-4);
  color: var(--indigo-7);
  margin: 0.25rem 0 0 0;
}
</style>
