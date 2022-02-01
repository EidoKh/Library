<template>
  <div class="my-12">
    <div>
      <h1 id="all-category" class="text-right text-5xl text-gray-600 my-4">
        {{ section_title }}
      </h1>
    </div>
    <div class="grid grid-cols-5 gap-4 my-2">
      <!--1------------------------------>
      <div v-for="book in books" :key="book">
        <!-- <div class=" bg-gray-100 flex items-center justify-center"> -->
        <div
          class="
            bg-white
            rounded-xl
            overflow-hidden
            shadow-xl
            hover:scale-105 hover:shadow-2xl
            transform
            duration-500
            cursor-pointer
          "
        >
          <div class="p-4">
            <!-- <span
              class="
                bg-red-500
                py-2
                px-4
                text-sm
                font-semibold
                text-white
                rounded-full
                cursor-pointer
              "
              >-30% Sale</span
            > -->
            <h1 class="mt-4 text-lg font-bold hover:underline cursor-pointer">
              {{ book.title }}
            </h1>
            <p class="mt-2 font-sans text-gray-700">{{ book.author }}</p>
          </div>
          <div class="relative">
            <img
              class="w-full h-96"
              :src="
                'http://127.0.0.1:8000/images/books_images/' + book.book_image
              "
            />
          </div>
        </div>
        <!-- </div> -->
      </div>
      <!-- component -->
      <!-- Create By Joker Banny -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    books: {
      type: Array,
    },
    section_title: {
      type: String,
    },
  },
};
</script>
<style>
.box {
  background-color: #1e1e26;
  border-radius: 10px;
  box-shadow: 2px 10px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 20px 10px;
}
.model {
  height: 350px;
  max-height: 100%;
  max-width: 100%;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}
.details p {
  font-family: calibri;
  font-weight: bold;
  color: #6a6a74;
  text-align: center;
  margin-top: 20px;
}
.marvel {
  color: #32323e;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: bebas kai;
  font-size: 25px;
}
.logo {
  height: 60px;
}
.box:hover {
  background-color: #17171d;
  transform-style: preserve-3d;
  transform: scale(1.02);
  transition: all ease 0.3s;
}
.box:hover .marvel {
  color: #c0292b;
  transition: all ease 0.5s;
}
/*--responsive for mobile phone--*/
@media (max-width: 720px) {
  .box {
    width: 94%;
    height: 500px;
  }
  .model {
    height: 250px;
  }
  .details p {
    font-size: 16px;
    width: 250px;
  }
}
</style>