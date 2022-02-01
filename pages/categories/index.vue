<template>
  <!-- component -->
  <page-hero :xy="temp" />
  <div class="container mx-auto px-6 mt-12">
    <div>
      <div>
        <h1 class="text-center text-5xl text-gray-600 my-4">جميع الفئات</h1>
      </div>

      <div class="grid grid-cols-3 gap-4 my-2">
        <div
          class="relative overflow-hidden rounded"
          style="height: 256px"
          v-for="category in categories"
          :key="category"
        >
          <a
            class="st-link"
            href="https://tourexpect.com/tour-packages/?location_id=10987"
          >
            <img
              class="
                w-full
                rounded
                block
                max-w-full
                brightness-75
                ease-in
                duration-300
                hover:scale-105
              "
              :src="
                'http://127.0.0.1:8000/images/categories_images/' +
                category.category_image
              "
            />
          </a>
          <div class="h-full">
            <div
              class="absolute top-1/2 left-1/2 text-center"
              style="transform: translate(-50%, -50%)"
            >
              <a
                href="https://tourexpect.com/tour-packages/?location_id=10987"
                class="text-xl font-bold text-white"
              >
                {{ category.category_name }}
              </a>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
<script setup>
const response = await $fetch("http://127.0.0.1:8000/api/all-categories");
const categories = response.data;
let search = "";
let temp = "test props";
</script>
