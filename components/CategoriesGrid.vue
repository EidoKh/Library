<template>
  <div>
    <div>
      <h1 class="text-center text-5xl text-gray-600 my-4">
        Best Categories {{ categories }}
      </h1>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div v-for="category in categories" :key="category">
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
              <p class="mt-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button
                class="
                  flex
                  items-center
                  mt-4
                  text-white text-sm
                  uppercase
                  font-medium
                  rounded
                  hover:underline
                  focus:outline-none
                "
              >
                <span>Shop Now</span>
                <svg
                  class="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const response = await $fetch("http://127.0.0.1:8000/api/all-categories");
const categories = response.data;
</script>
