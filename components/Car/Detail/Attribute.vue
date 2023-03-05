<script setup>
const props = defineProps({
  features: {
    type: Array,
  },
});
</script>
<template>
  <div
    class="mr-10 mt-5 border-b pb-5"
    v-for="(feature, index) in features"
    :key="index"
  >
    <div class="flex text-lg mt-2">
      <p class="rounded text-lime-800 mr-3">✔️</p>
      <p>{{ feature }}</p>
    </div>
  </div>
</template>
