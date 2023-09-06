<script setup lang="ts">
import { Books } from "~/types";

const { title } = defineProps<{ title: string }>();

const { data: books } = await useFetch<Books>("/api/books/");

const minPageInput = ref();
const maxPageInput = ref();

let maxPagesArray: number = 0;

if (books.value) {
  maxPagesArray = books.value.library.reduce(
    (maxPages, item) => Math.max(maxPages, item.pages),
    0
  );
}

const handleMinPageInput = () => {
  minPageInput.value > maxPagesArray ? (minPageInput.value = maxPagesArray) : 1;

  minPageInput.value < 0 ? (minPageInput.value = 1) : Number;
};

const handleMaxPageInput = () => {
  maxPageInput.value > maxPagesArray
    ? (maxPageInput.value = maxPagesArray)
    : maxPagesArray;

  maxPageInput.value < 0 ? (maxPageInput.value = maxPagesArray) : Number;
};

const bookList = computed(() => {
  const minPage = minPageInput.value;
  const maxPage = maxPageInput.value;

  return books.value?.library.filter((book) => {
    const page = book.pages;

    if (minPage && maxPage) {
      return page >= minPage && page <= maxPage;
    }

    if (minPage) {
      return page >= minPage;
    }

    if (maxPage) {
      return page <= maxPage;
    }

    return true;
  });
});
</script>
<template>
  <div class="flex justify-center pb-12">
    <div
      class="max-w-6xl px-2 md:px-4 lg:px-8 py-6 md:py-12 mt-12 rounded-lg bg-slate-900 mx-1 sm:mx-12 md:mx-1"
    >
      <header>
        <h2
          class="uppercase text-gray-300 text-2xl md:text-3xl font-bold mb-2 text-center md:text-left"
        >
          {{ title }}
        </h2>
      </header>
      <div class="mb-6 text-center md:text-start">
        <div class="pb-1">Rango de Páginas:</div>
        Min:
        <input
          class="remove-arrow w-9 bg-slate-900 border-b-2 border-slate-500 mr-9"
          placeholder="1"
          type="number"
          v-model="minPageInput"
          @input="handleMinPageInput"
        />
        Max:
        <input
          class="remove-arrow w-9 bg-slate-900 border-b-2 border-slate-500"
          :placeholder="`${maxPagesArray}`"
          type="number"
          v-model="maxPageInput"
          @input="handleMaxPageInput"
        />
      </div>

      <section class="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
        <NuxtLink
          class="rounded-lg border border-gray-600 pb-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 from-[95%] hover:from-slate-800 hover:via-slate-700 hover:to-slate-600 hover:from-[95%] duration-100 cursor-pointer"
          v-for="book in bookList"
          :key="book.id"
          :to="`/${book.id}`"
          v-if="bookList?.length"
        >
          <nuxt-img
            :src="book.cover"
            class="min-h-[250px] w-80 max-h-[250px] md:min-h-[290px] md:max-h-[290px] rounded-t-lg"
            height="300"
            width="300"
            :alt="book.title"
          />

          <h3 class="font-semibold line-clamp-1 hover:underline mt-2 pl-1">
            {{ book.title }}
          </h3>
          <p
            class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1 pl-1"
          >
            Autor: {{ book.author.name }}
          </p>
          <p
            class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1 pl-1"
          >
            Género: {{ book.genre }}
          </p>
          <p
            class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1 italic pl-1"
          >
            Páginas: {{ book.pages }}
          </p>
        </NuxtLink>
        <div v-else class="col-span-2 md:col-start-2">
          <h3 class="text-xl text-center md:text-4xl mt-12">
            No se han encontrado libros
          </h3>
          <nuxt-img class="-mt-20 md:-mt-28" src="/svg/book-finder.svg" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.remove-arrow::-webkit-inner-spin-button,
.remove-arrow::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
