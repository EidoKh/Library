<template>
  <div class="container mx-auto bg-gray-50 p-8">
    <div class="container mx-auto pt-8">
      <h1 class="font-bold text-3xl">{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <nuxt-link to="/" class="block mt-8">Back</nuxt-link>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const post = await $fetch(`/api/posts/${route.params.id}`);
</script>
