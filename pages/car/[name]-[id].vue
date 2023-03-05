<script setup>
const route = useRoute();
const { cars } = useCars();
const { firstLetterCapitalized } = useUtilities();
useHead({
  title: firstLetterCapitalized(route.params.name),
});

const car = computed(() => {
  return cars.find((car) => car.id === parseInt(route.params.id));
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id ${route.params.id} not found`,
  });
}

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div v-if="car">
    <CarDetailHero :car="car" />

    <CarDetailAttribute :features="car.features" />

    <CarDetailDescription :description="car.description" />

    <CarDetailContact />
  </div>
</template>
