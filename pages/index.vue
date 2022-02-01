<template>
  <hero />
  <div class="container mx-auto px-6 mt-12">
    <recommended-categories :categories="random_categories" />
    <books-section section_title="الأكثر إعجابا" :books="most_liked" /><br />
    <books-section section_title="الأكثر طلبا" :books="most_liked" /><br />
    <books-section section_title="كتب جديدة" :books="most_liked" />
  </div>
</template>
<script setup >
let data = await useFetch("/api/random_categories");
let random_categories = data.data.value.data;
let most_liked = await useFetch("/api/most_liked");
most_liked = most_liked.data.value.data;
</script>

