<template>
  <div class="price-picker">
    <div class="inputs">
      <div class="input-group">
        <label :for="minInputId">Min</label>
        <input
          :id="minInputId"
          type="number"
          :min="min"
          :max="max"
          :value="localMin"
          @input="updateMin"
          @blur="validateMin"
        />
      </div>
      <div class="input-group">
        <label :for="maxInputId">Max</label>
        <input
          :id="maxInputId"
          type="number"
          :min="min"
          :max="max"
          :value="localMax"
          @input="updateMax"
          @blur="validateMax"
        />
      </div>
    </div>

    <div class="slider-container">
      <div class="slider-track">
        <div
          class="slider-range"
          :style="{
            left: `${rangeLeft}%`,
            width: `${rangeWidth}%`,
          }"
        ></div>
      </div>
      <input
        type="range"
        class="slider slider-min"
        :min="min"
        :max="max"
        :step="step"
        :value="localMin"
        aria-label="Minimum price"
        @input="updateMinFromSlider"
      />
      <input
        type="range"
        class="slider slider-max"
        :min="min"
        :max="max"
        :step="step"
        :value="localMax"
        aria-label="Maximum price"
        @input="updateMaxFromSlider"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  min?: number
  max?: number
  modelValue?: [number, number]
}>()

const min = props.min ?? 0
const max = props.max ?? 100
const modelValue = props.modelValue ?? [min, max]

const emit = defineEmits<{
  "update:modelValue": [value: [number, number]]
}>()

const minInputId = useId()
const maxInputId = useId()

const localMin = ref(modelValue[0])
const localMax = ref(modelValue[1])

// Calculate step: aim for ~50 steps across the range
const step = computed(() => {
  const range = max - min
  const rawStep = range / 50
  // Round to sensible values (1, 5, 10, 50, 100, etc.)
  if (rawStep < 1) {
    return 1
  }
  if (rawStep < 5) {
    return 5
  }
  if (rawStep < 10) {
    return 10
  }
  if (rawStep < 50) {
    return 50
  }
  return Math.ceil(rawStep / 100) * 100
})

// Calculate visual range position
const rangeLeft = computed(() => ((localMin.value - min) / (max - min)) * 100)
const rangeWidth = computed(
  () => ((localMax.value - localMin.value) / (max - min)) * 100,
)

// Sync with parent when modelValue changes
watch(
  () => modelValue,
  (newValue) => {
    localMin.value = newValue[0]
    localMax.value = newValue[1]
  },
  { deep: true },
)

function updateMin(event: Event) {
  const value = Number((event.target as HTMLInputElement).value)
  localMin.value = value
}

function updateMax(event: Event) {
  const value = Number((event.target as HTMLInputElement).value)
  localMax.value = value
}

function validateMin() {
  localMin.value = Math.max(min, Math.min(localMin.value, localMax.value))
  emitUpdate()
}

function validateMax() {
  localMax.value = Math.min(max, Math.max(localMax.value, localMin.value))
  emitUpdate()
}

function updateMinFromSlider(event: Event) {
  const value = Number((event.target as HTMLInputElement).value)
  localMin.value = Math.min(value, localMax.value)
  emitUpdate()
}

function updateMaxFromSlider(event: Event) {
  const value = Number((event.target as HTMLInputElement).value)
  localMax.value = Math.max(value, localMin.value)
  emitUpdate()
}

function emitUpdate() {
  emit("update:modelValue", [localMin.value, localMax.value])
}
</script>

<style scoped>
.price-picker {
  width: 240px;
  padding: var(--space-4);
  background: var(--surface-1);
  border-radius: var(--radius-2);
}

.inputs {
  display: flex;
  gap: var(--space-3);
  margin-block-end: var(--space-4);
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.input-group label {
  font-size: var(--font-size--1);
  font-weight: var(--font-weight-6);
  color: var(--text-color-2);
}

.input-group input[type="number"] {
  width: 100%;
  padding: var(--space-2);
  border: var(--border-1);
  border-radius: var(--radius-2);
  font-size: var(--font-size--1);
  background: var(--surface-0);
  color: var(--text-color-1);
  box-sizing: border-box;
}

.input-group input[type="number"]:focus {
  outline-color: var(--link-color);
  outline-width: 2px;
  outline-style: solid;
}

.slider-container {
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
}

.slider-track {
  position: absolute;
  width: 100%;
  height: 6px;
  background: var(--surface-3);
  border-radius: var(--radius-1);
  pointer-events: none;
}

.slider-range {
  position: absolute;
  height: 100%;
  background: var(--link-color);
  border-radius: var(--radius-1);
}

.slider {
  position: absolute;
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  pointer-events: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-round);
  background: var(--surface-0);
  border: var(--border-2);
  cursor: pointer;
  pointer-events: auto;
  box-shadow: var(--shadow-2);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-round);
  background: var(--surface-0);
  border: var(--border-2);
  cursor: pointer;
  pointer-events: auto;
  box-shadow: var(--shadow-2);
}

.slider:focus {
  outline: none;
}

.slider:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--link-color);
  outline-offset: 2px;
}

.slider:focus-visible::-moz-range-thumb {
  outline: 2px solid var(--link-color);
  outline-offset: 2px;
}

.slider-min {
  z-index: 1;
}

.slider-max {
  z-index: 2;
}
</style>
