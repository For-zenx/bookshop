<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBookStore } from "~/stores/BookStore";
const { title } = defineProps<{ title: string }>();

const router = useRouter();
const bookStore = useBookStore();
const { fetchBook, obtainToggleHistory, toggleFav } = bookStore;
const { filteredBooks } = storeToRefs(bookStore);
await fetchBook();

onMounted(() => {
  obtainToggleHistory();
});
</script>
<template>
  <div class="flex justify-center pb-12">
    <div
      class="max-w-lg md:max-w-5xl px-2 md:px-4 lg:px-8 py-6 md:py-12 mt-12 rounded-lg bg-slate-900 mx-1 sm:mx-12 md:mx-1"
    >
      <header>
        <h2
          class="uppercase text-gray-300 text-2xl md:text-3xl font-bold mb-2 text-center md:text-left"
        >
          {{ title }}
        </h2>
      </header>
      <BaseRangeFilter />
      <section class="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
        <template v-if="filteredBooks.length">
          <div
            v-for="book in filteredBooks"
            :key="book.id"
            class="rounded-lg border border-gray-600 pb-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 from-[95%] hover:from-slate-800 hover:via-slate-700 hover:to-slate-600 hover:from-[95%] duration-100 cursor-pointer"
          >
            <nuxt-img
              :src="book.cover"
              class="min-h-[250px] w-80 max-h-[250px] md:min-h-[290px] md:max-h-[290px] rounded-t-lg"
              height="300"
              width="300"
              :alt="book.title"
              @click="router.push(`/book/${book.id}`)"
            />
            <div class="flex justify-between mt-1">
              <h3
                class="font-semibold line-clamp-1 hover:underline mt-1 pl-1 cursor-pointer"
                @click="router.push(`/book/${book.id}`)"
              >
                {{ book.title }}
              </h3>
              <button
                @click="toggleFav(book.id)"
                aria-label="Guardar"
                class="mx-2"
                :class="
                  book.isFav
                    ? 'duration-100 lg:duration-200'
                    : 'duration-100 lg:duration-200'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :fill="book.isFav ? 'rgb(4 120 87)' : 'none'"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  :stroke="book.isFav ? '' : '#9ca3af'"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </button>
            </div>
            <p
              class="align-sub line-clamp-1 hover:underline text-sm mt-1 pl-1 cursor-pointer"
              @click="router.push(`/book/${book.id}`)"
            >
              Author: {{ book.author.name }}
            </p>
            <p
              class="align-sub line-clamp-1 hover:underline text-sm mt-1 pl-1 cursor-pointer"
              @click="router.push(`/book/${book.id}`)"
            >
              Genre: {{ book.genre }}
            </p>
            <p
              class="align-sub line-clamp-1 hover:underline text-sm mt-1 italic pl-1 cursor-pointer"
              @click="router.push(`/book/${book.id}`)"
            >
              Pages: {{ book.pages }}
            </p>
          </div>
        </template>
        <div v-else class="col-span-2 md:col-start-2">
          <h3 class="text-xl text-center md:text-4xl mt-12">Books not found</h3>
          <nuxt-img
            class="-mt-20 md:-mt-28"
            width="550"
            height="50"
            src="/svg/book-finder.svg"
          />
        </div>
      </section>
    </div>
  </div>
</template>
