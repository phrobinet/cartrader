<script setup>
const props = defineProps({
  listing: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img :src="listing.url" alt="" class="w-80 mr-3 h-44" />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-bleu-400">{{ listing.price }}</p>
      </div>
    </div>
    <div class="flex p-3">
      <NuxtLink
        :to="`/profile/listing/view/${listing.id}`"
        class="text-blue-400 mr-5"
        >View</NuxtLink
      >
      <p class="text-red-400 cursor-pointer">Delete</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
