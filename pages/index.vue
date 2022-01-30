<template>
  <hero />
  <div class="container mx-auto bg-gray-50 p-8">
    <div class="container mx-auto pt-8">
      <h1 class="font-bold text-3xl">Blog Posts</h1>
      {{ posts }}
      <ul class="w-fit mt-8">
        <li
          v-for="post in posts"
          :key="post.id"
          class="
            p-2
            border-b-2 border-indigo-400
            hover:bg-indigo-400 hover:text-white hover:cursor-pointer
          "
        >
          <nuxt-link :to="'/posts/' + post.id">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const posts = await $fetch("http://127.0.0.1:8000/api/categories");
// const mountains = await $axios.$get(`/mountains`);
</script>
