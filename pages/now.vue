<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-gray-600 text-lg">Hello, Nitro!</h1>
    Current time is:{{ time }}
  </div>
</template>
<script setup>
const time = await $fetch("/api/now");
</script>