<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SING_OUT", session: null },
    });
  } catch (error) {
    console.log(error);
  }
  // if (error) {
  //   console.log(error);
  // }
  user.value = null;
  navigateTo("/");
};
</script>
<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <nuxt-link to="/" class="text-3xl font-mono">cartrader</nuxt-link>
    <div class="flex" v-if="user">
      <nuxt-link to="/profile/listings" class="mr-5">Profile</nuxt-link>
      <p @click="logout" class="cursor-pointer">Logout</p>
    </div>
    <div class="flex" v-else>
      <nuxt-link to="/login" class="mr-5">Login</nuxt-link>
    </div>
  </header>
</template>
