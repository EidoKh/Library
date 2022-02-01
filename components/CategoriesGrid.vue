<template>
  <div>
    <div>
      <h1 class="text-center text-5xl text-gray-600 my-4">Best Categories</h1>
    </div>

    <div class="grid grid-cols-3 gap-4 my-2">
      <!-- <div v-for="category in categories" :key="category">
        <div
          class="
            w-full
            h-64
            md:mx-4
            rounded-md
            overflow-hidden
            bg-cover bg-center
          "
          style="
            background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
          "
        >
          <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-semibold">
                {{ category.category_name }}
              </h2>
            </div>
          </div>
        </div>
      </div> -->
      <!--  -->

      <div
        class="relative overflow-hidden rounded"
        style="height: 256px"
        v-for="category in categories"
        :key="category"
      >
        <p>
          <a
            class="st-link"
            href="https://tourexpect.com/tour-packages/?location_id=10987"
            ><br />
            <img
              class="w-full rounded block max-w-full brightness-75"
              :src="
                'http://127.0.0.1:8000/images/categories_images/' +
                category.category_image
              "
            />
          </a>
        </p>
        <div class="h-full">
          <div
            class="absolute top-1/2 left-1/2 text-center mt-4"
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
  {{ categories }}
</template>
<script setup>
const response = await $fetch("http://127.0.0.1:8000/api/all-categories");
const categories = response.data;
</script>
