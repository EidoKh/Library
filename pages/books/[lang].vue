<template>
  <div>
    <page-hero
      @setSearch="setValuetoSearch($event)"
      :component_title="
        $route.params.lang === 'english' ? 'الكتب ألأنكليزية' : 'الكتب العربية'
      "
    />
    <div class="container mx-auto px-6 my-12">
      <div>
        <h1 id="all-category" class="text-right text-5xl text-gray-600 my-4">
          {{
            $route.params.lang === "english"
              ? "الكتب ألأنكليزية"
              : "الكتب العربية"
          }}
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
              <h1 class="mt-4 text-lg font-bold hover:underline cursor-pointer">
                {{ book.title }}
              </h1>
              <p class="mt-2 font-sans text-gray-700">{{ book.author }}</p>
            </div>
            <div class="relative">
              <img
                class="w-full h-96"
                :src="APP_URL + '/images/books_images/' + book.book_image"
              />
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { config } from "../../config";
import { ref } from "vue";
const route = useRoute();
let books = ref([]);
let APP_URL = config.APP_URL;
onMounted(() => {
  getBooks();
});
watch(
  () => route.params.lang,
  () => {
    getBooks();
  }
);
async function getBooks() {
  let res = await useFetch(`/api/books?lang=${route.params.lang}`);
  books.value = res.data.value.data;
}

async function getResults() {
  getBooks();
}
function setValuetoSearch(vario) {
  console.log(vario);
}
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