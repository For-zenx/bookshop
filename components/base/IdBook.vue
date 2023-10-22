<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBookStore } from "~/stores/BookStore";

const bookStore = useBookStore();
const { fetchBook, obtainToggleHistory, toggleFav } = bookStore;
const { bookList } = storeToRefs(bookStore);
await fetchBook();

const { id } = useRoute().params;
const router = useRouter();

const isFirstPage = () => Number(id) === 1;
const isLastPage = () => Number(id) === bookStore.bookList.length;
const goBack = () => !isFirstPage() && router.push(`/book/${Number(id) - 1}`);
const goForward = () => !isLastPage() && router.push(`/book/${Number(id) + 1}`);

onMounted(() => {
  obtainToggleHistory();
});
</script>

<template>
  <section class="flex justify-center pb-12 md:pb-0">
    <div
      class="max-w-sm lg:min-w-5xl lg:max-w-5xl px-2 md:px-4 lg:px-8 pt-6 pb-12 mt-12 rounded-lg bg-slate-900 mx-2"
    >
      <nuxt-img
        src="/svg/arrow-return-left.svg"
        alt="arrow return left"
        width="40"
        height="40"
        class="mb-2 p-1 mx-3 lg:mx-0 cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50 hover:text-gray-800"
        @click="router.push('/')"
      />
      <template v-for="book in bookList">
        <template v-if="id === String(book.id)">
          <div
            class="grid grid-cols-1 max-w-lg px-4 lg:max-w-max lg:flex lg:px-0"
          >
            <nuxt-img
              :src="book.cover"
              :alt="book.title"
              height="300"
              width="350"
              class="min-h-[360px] max-h-[360px] lg:min-h-[480px] lg:max-h-[480px] mr-12"
            />
            <div class="grid grid-rows-9">
              <div
                class="flex justify-between mb-2 mt-8 lg:mt-0 lg:border-b-[1px] border-gray-700"
              >
                <h2 class="uppercase text-gray-300 text-2xl font-bold">
                  {{ book.title }}
                </h2>
                <button
                  aria-label="Guardar"
                  class="p-1 mb-8"
                  @click="toggleFav(book.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :fill="book.isFav ? 'rgb(4 120 87)' : 'none'"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    :stroke="book.isFav ? '' : '#9ca3af'"
                    class="w-11 h-11"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </button>
              </div>
              <div class="lg:mt-8 text-lg font-bold">
                Synopsis:
                <span class="font-normal">{{ book.synopsis }}</span>
              </div>
              <div class="mt-4 lg:mt-6 font-bold">
                Author: <span class="font-normal">{{ book.author.name }}</span>
              </div>
              <div class="mt-3 font-bold">
                Pages: <span class="font-normal">{{ book.pages }}</span>
              </div>
              <div class="mt-3 font-bold">
                Genre: <span class="font-normal">{{ book.genre }}</span>
              </div>
              <div class="mt-3 font-bold">
                Year: <span class="font-normal">{{ book.year }}</span>
              </div>
              <div class="mt-3 font-bold">
                ISBN: <span class="font-normal">{{ book.ISBN }}</span>
              </div>
              <div class="mt-4 lg:mt-6">
                <template v-if="book.author.otherBooks.length !== 0">
                  Related Books: {{ book.author.otherBooks[0] }}.
                  {{ book.author.otherBooks[1] }}
                </template>
                <template v-else> Related Books: No search found </template>
              </div>
              <div class="flex justify-center mt-14 lg:mt-8 lg:justify-end">
                <nuxt-img
                  src="/svg/angle-left.svg"
                  width="45"
                  height="45"
                  alt="angle left"
                  class="mr-4 pr-0.5 cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50"
                  :class="isFirstPage() ? 'opacity-20 cursor-not-allowed' : ''"
                  @click="goBack()"
                />
                <nuxt-img
                  src="/svg/angle-right.svg"
                  width="45"
                  height="45"
                  alt="angle right"
                  class="pl-0.5 cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50"
                  :class="isLastPage() ? 'opacity-20 cursor-not-allowed' : ''"
                  @click="goForward()"
                />
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </section>
</template>
