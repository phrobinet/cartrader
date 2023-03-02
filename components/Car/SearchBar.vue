<script setup>
const city = ref("");
const cityError = ref(false);
const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};
</script>

<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      :placeholder="cityError ? 'You need to answer' : 'Search by city...'"
      v-model="city"
    />
    <button class="px-10 bg-sky-500 text-white" @click="handleSearch">
      Search
    </button>
  </div>
</template>
