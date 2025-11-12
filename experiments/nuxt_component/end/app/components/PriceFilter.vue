<template>
  <div class="price-filter">
    <h3 class="filter-title">Price Range</h3>
    <PricePicker
      v-if="priceRange"
      :min="priceRange.min"
      :max="priceRange.max"
      :model-value="selectedRange"
      @update:model-value="handlePriceChange"
    />
    <div v-else class="loading">Loading...</div>
  </div>
</template>

<script setup lang="ts">
const { priceRange = undefined } = defineProps<{
  priceRange?: { min: number; max: number }
}>()

const route = useRoute()
const router = useRouter()

// Initialize from URL or use full range
const selectedRange = ref<[number, number]>([
  priceRange?.min ?? 0,
  priceRange?.max ?? 100,
])

// Update selectedRange when priceRange prop changes
watch(
  () => priceRange,
  (newRange) => {
    if (newRange) {
      const urlMin = route.query.priceFrom
        ? Number(route.query.priceFrom)
        : newRange.min
      const urlMax = route.query.priceTo
        ? Number(route.query.priceTo)
        : newRange.max
      selectedRange.value = [urlMin, urlMax]
    }
  },
  { immediate: true },
)

// Debounced URL update
const updateUrl = useDebounceFn((range: [number, number]) => {
  const query = { ...route.query }

  // Only add params if different from full range
  if (priceRange) {
    if (range[0] === priceRange.min) {
      delete query.priceFrom
    } else {
      query.priceFrom = String(range[0])
    }

    if (range[1] === priceRange.max) {
      delete query.priceTo
    } else {
      query.priceTo = String(range[1])
    }
  }

  router.push({ query })
}, 300)

function handlePriceChange(range: [number, number]) {
  selectedRange.value = range
  updateUrl(range)
}
</script>

<style scoped>
.price-filter {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.filter-title {
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-6);
  color: var(--text-color-1);
  margin: 0;
}

.loading {
  padding: var(--space-4);
  color: var(--text-color-2);
  font-size: var(--font-size--1);
}
</style>
