<script setup lang="ts">
import { useBookStore } from "~/stores/BookStore";
import { onClickOutside } from "@vueuse/core";

const router = useRouter();
const bookStore = useBookStore();
const { fetchBook } = bookStore;
await fetchBook();

const dropDown = ref(false);
const openDropDown = () => {
  dropDown.value = true;
};
const closeDropDown = () => {
  dropDown.value = false;
};

const modal = ref(null);
onClickOutside(modal, () => {
  closeDropDown();
});
</script>
<template>
  <div class="relative">
    <button
      v-if="!dropDown"
      @click="openDropDown()"
      :class="
        bookStore.favCount === 0
          ? 'cursor-not-allowed opacity-50  duration-200'
          : 'opacity-100 transition-opacity  duration 200'
      "
      class="cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50"
      aria-label="Abrir menú desplegable"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        class="w-11 h-11 p-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
        />
      </svg>
    </button>
    <button
      v-else
      @click="closeDropDown()"
      :class="
        bookStore.favCount === 0
          ? 'cursor-not-allowed opacity-50  duration-200'
          : 'opacity-100 transition-opacity  duration 200'
      "
      class="cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50"
      aria-label="Abrir menú desplegable"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        class="w-11 h-11 p-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
        />
      </svg>
    </button>
    <span
      v-if="!dropDown"
      class="fixed"
      :class="bookStore.favCount === 0 ? 'opacity-80' : ''"
    >
      {{ bookStore.favCount }}
    </span>
    <Transition name="slide-fade">
      <div v-if="dropDown" class="flex justify-end" ref="modal">
        <div
          class="fixed rounded-lg bg-slate-700 shadow-lg min-w-screen sm:min-w-[380px] sm:max-w-[380px] grid overflow-y-scroll min-h-[100px] max-h-[470px]"
        >
          <div class="sticky top-0 bg-slate-700 z-10 p-2 flex justify-between">
            <div class="flex">
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
            </div>
            <span
              class="mr-2 underline font-bold"
              :class="bookStore.favCount === 0"
            >
              {{ bookStore.favCount }}
            </span>
          </div>
          <div
            v-if="bookStore.favs.length === 0"
            class="text-center pb-3 mx-12"
          >
            Your reading list is empty.
          </div>
          <div
            v-else
            v-for="book in bookStore.favs"
            :key="book.id"
            class="p-2 border-b-[1px] border-gray-500 grid grid-cols-12 grid-rows-4 hover:bg-slate-600 hover:bg-opacity-30"
          >
            <nuxt-img
              class="col-span-3 row-span-4 min-h-[130px] max-h-[130px] cursor-pointer"
              :src="book.cover"
              :alt="book.title"
              width="80"
              height="80"
              @click="router.push(`/book/${book.id}`), closeDropDown()"
            />
            <div
              class="col-span-8 ml-1 line-clamp-1 p-1 font-bold cursor-pointer"
              @click="router.push(`/book/${book.id}`), closeDropDown()"
            >
              {{ book.title }}
            </div>
            <button
              @click="bookStore.toggleFav(book.id)"
              class="pl-0.5 cursor-pointer hover:bg-slate-600 hover:border-gray-400 hover:rounded-full duration-50"
            >
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
            </button>
            <div
              class="text-sm row-start-2 ml-2 col-start-4 col-span-8 cursor-pointer"
              @click="router.push(`/book/${book.id}`), closeDropDown()"
            >
              Synopsys:
            </div>
            <div
              class="ml-2 row-start-3 col-start-4 col-span-8 row-span-2 text-sm text-gray-400 line-clamp-3 cursor-pointer"
              @click="router.push(`/book/${book.id}`), closeDropDown()"
            >
              {{ book.synopsis }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.15s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
