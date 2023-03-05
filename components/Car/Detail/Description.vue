<script setup>
const props = defineProps({
  description: {
    type: String,
  },
});
</script>
<template>
  <div class="mt-5">
    <div class="mb-10">{{ description }}}</div>
  </div>
</template>
