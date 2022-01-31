<template>
  <div>
    <div class="container mx-auto pt-8">
      <h1 class="font-bold text-3xl">All Categories</h1>
    </div>
    {{ categories[0] }}
    <!-- <ul
      class="flex overflow-x-auto gap-6"
      v-for="category in categories"
      :key="category.id"
    >
      <li class="shrink-0">
        <img
          :src="
            'http://127.0.0.1:8000/images/categories_images/' +
            category.category_image
          "
          :alt="category.category_name"
        />
      </li>
    </ul> -->
    <!-- (((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))) -->
    <div class="container flex">
      <!--slider------------------->
      <div class="my-auto">
        <svg
          @click="left"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 rounded-full bg-gray-300 my-auto cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <ul id="autoWidth" class="flex overflow-hidden">
        <!--1------------------------------>
        <li class="item-a">
          <!--slider-box-->
          <div class="box">
            <p class="marvel">MARVEL 1</p>
            <!--model-->
            <img
              class="model"
              src="http://127.0.0.1:8000/images/categories_images/DeadPool.png"
            />
            <!--details-->
            <div class="details">
              <!--logo-character-->
              <img
                class="logo"
                src="http://127.0.0.1:8000/images/categories_images/DeadPool-logo.png"
                style="height: auto"
                width="100px"
              />
              <!--character-details-->
              <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p>
            </div>
          </div>
        </li>
        <!--2------------------------------>
        <li class="item-a">
          <!--slider-box-->
          <div class="box">
            <p class="marvel">MARVEL 2</p>
            <!--model-->
            <img
              class="model"
              src="http://127.0.0.1:8000/images/categories_images/DeadPool.png"
            />
            <!--details-->
            <div class="details">
              <!--logo-character-->
              <img
                class="logo"
                src="http://127.0.0.1:8000/images/categories_images/DeadPool-logo.png"
              />
              <!--character-details-->
              <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p>
            </div>
          </div>
        </li>
        <!--3------------------------------>
        <li class="item-a">
          <!--slider-box-->
          <div class="box">
            <p class="marvel">MARVEL 3</p>
            <!--model-->
            <img
              class="model"
              src="http://127.0.0.1:8000/images/categories_images/DeadPool.png"
            />
            <!--details-->
            <div class="details">
              <!--logo-character-->
              <img
                class="logo"
                src="http://127.0.0.1:8000/images/categories_images/DeadPool-logo.png"
              />
              <!--character-details-->
              <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p>
            </div>
          </div>
        </li>
        <!--4------------------------------>
        <li class="item-a">
          <!--slider-box-->
          <div class="box">
            <p class="marvel">MARVEL4</p>
            <!--model-->
            <img
              class="model"
              src="http://127.0.0.1:8000/images/categories_images/DeadPool.png"
            />
            <!--details-->
            <div class="details">
              <!--logo-character-->
              <img
                class="logo"
                src="http://127.0.0.1:8000/images/categories_images/DeadPool-logo.png"
              />
              <!--character-details-->
              <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p>
            </div>
          </div>
        </li>
        <!--5------------------------------>
        <li class="item-a">
          <!--slider-box-->
          <div class="box">
            <p class="marvel">MARVEL 5</p>
            <!--model-->
            <img
              class="model"
              src="http://127.0.0.1:8000/images/categories_images/DeadPool.png"
            />
            <!--details-->
            <div class="details">
              <!--logo-character-->
              <img
                class="logo"
                src="http://127.0.0.1:8000/images/categories_images/DeadPool-logo.png"
              />
              <!--character-details-->
              <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p>
            </div>
          </div>
        </li>
        <!--6------------------------------>
        <li class="item-a">
          <!--slider-box-->
          <div class="box">
            <p class="marvel">MARVEL 6</p>
            <!--model-->
            <img
              class="model"
              src="http://127.0.0.1:8000/images/categories_images/DeadPool.png"
            />
            <!--details-->
            <div class="details">
              <!--logo-character-->
              <img
                class="logo"
                src="http://127.0.0.1:8000/images/categories_images/DeadPool-logo.png"
              />
              <!--character-details-->
              <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p>
            </div>
          </div>
        </li>
      </ul>

      <div class="my-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 rounded-full bg-slate-300 absolute"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>

    <!-- ((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))) -->
  </div>
</template>
<script setup>
const response = await $fetch("http://127.0.0.1:8000/api/all-categories");
const categories = response.data;
function left() {
  console.log("left");
}
</script>
<style>
.box {
  width: 350px;
  height: 610px;
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