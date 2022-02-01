<template>
  <div>
    <div>
      <h1 id="all-category" class="text-right text-5xl text-gray-600 my-4">
        الفئات المقترحة
      </h1>
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
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
    },
  },
  setup() {
    // const response = await $fetch("http://127.0.0.1:8000/api/random-categories");
    // let categories = response.data;
  },
};
</script>
<style>
#all-categories {
  font-family: "Lucida Console", "Courier New", monospace;
}
</style>