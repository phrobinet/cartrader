<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>
<template>
  <div class="flex justify-center items-center flex-col h-screen">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <button
      class="rounded mt-7 tex-2xl bg-blue-400 py-4 px-7 text-white"
      @click="handleError"
    >
      Go back
    </button>
  </div>
</template>
