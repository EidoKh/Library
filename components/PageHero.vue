<template>
  <header>
    <div
      class="w-full bg-center bg-cover h-96"
      style="
        background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
      "
    >
      <div
        class="
          flex
          items-center
          justify-center
          w-full
          h-full
          bg-gray-900 bg-opacity-50
        "
      >
        <div class="text-center w-1/3">
          <h1
            class="text-2xl font-semibold text-white uppercase lg:text-3xl mb-4"
          >
            {{ component_title }}
          </h1>
          <!--  -->
          <!-- component -->

          <div
            class="
              flex
              items-center
              w-full
              mx-auto
              bg-white
              rounded-r-lg rounded-l-3xl
            "
          >
            <div class="w-full">
              <input
                type="search"
                @change="$emit('setSearch', $event.target)"
                class="
                  w-full
                  px-4
                  py-1
                  text-gray-800
                  rounded-full
                  focus:outline-none
                "
                placeholder="بحث"
              />
            </div>
            <div>
              <button
                type="submit"
                class="
                  flex
                  items-center
                  bg-blue-500
                  justify-center
                  w-12
                  h-12
                  text-white
                  rounded-l-lg
                "
                :class="
                  search.length > 0
                    ? 'bg-purple-500'
                    : 'bg-gray-500 cursor-not-allowed'
                "
                :disabled="search.length == 0"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { ref } from "vue";
export default {
  emits: ["setSearch"],
  props: {
    component_title: {
      type: String,
    },
  },
  setup() {
    let search = ref("");

    return { search };
  },
};
let search = "";
</script>