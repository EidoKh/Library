<template>
  <div class="">
    <div>
      <nav
        id="nav"
        class="
          fixed
          inset-x-0
          top-0
          flex flex-row
          justify-between
          z-10
          text-indigo-200
          bg-transparent
        "
      >
        <div class="p-4">
          <div class="font-extrabold tracking-widest text-xl">
            <nuxt-link
              class="transition duration-500 hover:text-indigo-500"
              to="/"
              >المكتبة</nuxt-link
            >
          </div>
        </div>
        <!-- Nav Items Working on Tablet & Bigger Sceen -->
        <div class="p-4 hidden md:flex flex-row justify-between font-bold">
          <div
            v-for="(link, index) in links"
            :key="index"
            class="
              mx-4
              text-lg
              border-b-2 border-transparent
              hover:border-b-2 hover:border-indigo-300
              transition
              duration-500
            "
          >
            <nuxt-link :to="link.url">{{ link.name }}</nuxt-link>
          </div>
        </div>
        <!-- Burger Nav Button on Mobile -->
        <div @click="isOpen = !isOpen" id="nav-open" class="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>
      <div
        v-show="isOpen"
        id="nav-opened"
        class="
          fixed
          left-0
          right-0
          bg-white
          mx-2
          mt-16
          rounded-br rounded-bl
          shadow
          z-10
        "
      >
        <div class="p-2 divide-y divide-gray-600 flex flex-col">
          <div
            class="p-2 font-semibold hover:text-indigo-700"
            v-for="(link, index) in links"
            :key="index"
          >
            <nuxt-link :to="link.url">{{ link.name }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let isOpen = ref(false);
const links = reactive([
  { name: "العربية", url: "/books/arabic" },
  { name: "الإنكليزية", url: "/books/english" },
  { name: "كوردي", url: "/books/kurdish" },
  { name: "الفئات", url: "/categories" },
]);
</script>
