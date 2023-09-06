<script setup>
const { data: books } = await useFetch("/api/books/");
const showDropDown = ref(false);

const toggleDropDown = () => {
  showDropDown.value = !showDropDown.value;
};
</script>

<template>
  <div class="relative">
    <button @click="toggleDropDown()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        class="w-10 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
        />
      </svg>
    </button>
    <div v-if="showDropDown" class="flex justify-end">
      <div
        class="fixed rounded-lg bg-slate-700 shadow-lg max-w-[380px] grid overflow-y-scroll max-h-[400px]"
      >
        <p class="sticky top-0 bg-slate-700 z-10 p-2 flex">
          Reading list
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </p>
        <div
          v-for="book in books.library"
          class="p-2 border-b-[1px] border-gray-500 grid grid-cols-12 grid-rows-4"
        >
          <nuxt-img
            class="col-span-3 row-span-4 min-h-[130px] max-h-[130px]"
            :src="book.cover"
            alt="Book Image"
            width="80"
            height="80"
          />
          <div class="col-span-8 ml-1 line-clamp-1 p-1">
            {{ book.title }}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
            />
          </svg>
          <div
            class="font-bold text-sm underline row-start-2 ml-2 col-start-4 col-span-8"
          >
            Sinposis:
          </div>
          <div
            class="ml-2 row-start-3 col-start-4 col-span-8 row-span-2 text-sm text-gray-400"
          >
            {{ book.synopsis }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
