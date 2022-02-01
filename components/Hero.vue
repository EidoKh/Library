<template>
  <header
    id="up"
    class="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
  >
    <!-- Overlay Background + Center Control -->
    <div
      class="h-screen bg-opacity-50 bg-black flex items-center justify-center"
      style="background: rgba(0, 0, 0, 0.5)"
    >
      <div class="mx-2 text-center">
        <h1
          class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl"
        >
          تصفح أروع الكتب
        </h1>
        <h2
          class="
            text-gray-200
            font-extrabold
            text-3xl
            xs:text-4xl
            md:text-5xl
            leading-tight
            mt-2
          "
        >
          ستجد كل ما ترغب به هنا في مكتبتنا
        </h2>
        <div class="inline-flex">
          <button
            class="
              p-2
              my-5
              mx-2
              bg-indigo-700
              hover:bg-indigo-800
              font-bold
              text-white
              rounded
              border-2 border-transparent
              hover:border-indigo-800
              shadow-md
              transition
              duration-500
              md:text-xl
            "
          >
            Hire US!
          </button>
          <a href="#about"
            ><button
              class="
                p-2
                my-5
                mx-2
                bg-transparent
                border-2
                bg-indigo-200 bg-opacity-75
                hover:bg-opacity-100
                border-indigo-700
                rounded
                hover:border-indigo-800
                font-bold
                text-indigo-800
                shadow-md
                transition
                duration-500
                md:text-lg
              "
            >
              Learn More
            </button></a
          >
        </div>
      </div>
    </div>
  </header>
</template>
<style>
/*
		You may need this for responsive background
		header {
			background: url('bg-425.jpg');
		}

		@media only screen and (min-width:640px) {
			header {
				background: url('bg-640.jpg');
			}
		}

		@media only screen and (min-width:768px) {
			header {
				background: url('bg-768.jpg');
			}
		}

		@media only screen and (min-width:1024px) {
			header {
				background: url('bg-1024.jpg');
			}
		}

		@media only screen and (min-width:1025px) {
			header {
				background: url('bg-max.jpg');
			}
		} */
/* Default background by https://www.pexels.com/@knownasovan */
header {
  background: url("https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}
</style>