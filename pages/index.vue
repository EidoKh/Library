<template>
  <hero />
  <div class="container mx-auto px-6 mt-12">
    <recommended-categories :categories="random_categories" />
    <most-liked :books="most_liked" />
  </div>
</template>
<script setup >
let data = await useFetch("/api/random_categories");
let random_categories = data.data.value.data;
let most_liked = await useFetch("/api/most_liked");
most_liked = most_liked.data.value.data;
</script>

