<script setup lang="ts">
import { Books } from "~/types";

const { data: books } = await useFetch<Books>("/api/books/");

const { id } = useRoute().params;

const router = useRouter();

const route = useRoute();

const isFirstPage = () => Number(id) === 1;
const isLastPage = () => {
  const arrayNumber = String(books.value?.library.length);
  return arrayNumber === route.params.id;
};

const goToHome = () => {
  router.push("/");
};

const goBack = () => {
  if (!isFirstPage()) {
    router.push(`/${Number(id) - 1}`);
  }
};

const goForward = () => {
  if (!isLastPage()) {
    router.push(`/${Number(id) + 1}`);
  }
};
</script>

<template>
  <section class="flex justify-center">
    <div
      class="max-w-5xl px-2 md:px-4 lg:px-8 pt-6 pb-12 mt-12 rounded-lg bg-gradient-to-br bg-slate-900 mx-2"
    >
      <img
        src="/svg/arrow-return-left.svg"
        alt="arrow return left"
        width="40"
        height="40"
        class="mb-2 p-1 mx-3 lg:mx-0 cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50 hover:text-gray-800"
        @click="goToHome()"
      />
      <main v-for="book in books?.library">
        <div
          v-if="id === book.id"
          class="grid grid-cols-1 max-w-lg px-4 lg:max-w-max lg:flex lg:px-0"
        >
          <img
            :src="book.cover"
            :alt="book.title"
            height="300"
            width="350"
            class="min-h-[480px] max-h-[480px] mr-12"
          />

          <div class="grid grid-rows-9">
            <h2
              class="uppercase text-gray-300 text-2xl font-bold mb-4 mt-8 lg:mt-0"
            >
              {{ book.title }}
            </h2>
            <div class="mt-2 lg:mt-8 text-lg font-mono">
              Sinopsis: {{ book.synopsis }}
            </div>
            <div class="mt-2 lg:mt-6 font-mono font-bold">
              Autor: <span class="font-normal">{{ book.author.name }}</span>
            </div>

            <div class="mt-2 font-mono font-bold">
              Páginas: <span class="font-normal">{{ book.pages }}</span>
            </div>
            <div class="mt-2 font-mono font-bold">
              Género: <span class="font-normal">{{ book.genre }}</span>
            </div>
            <div class="mt-2 font-mono font-bold">
              Año: <span class="font-normal">{{ book.year }}</span>
            </div>
            <div class="mt-2 font-mono font-bold">
              ISBN: <span class="font-normal">{{ book.ISBN }}</span>
            </div>
            <div
              class="mt-2 lg:mt-6 font-mono"
              v-if="book.author.otherBooks.length !== 0"
            >
              Libros Relacionados: {{ book.author.otherBooks[0] }}.
              {{ book.author.otherBooks[1] }}
            </div>
            <div class="mt-2 lg:mt-6 font-mono" v-else>
              Libros Relacionados: No hay coincidencias
            </div>
            <div class="flex justify-center mt-14 lg:mt-8 lg:justify-end mr-8">
              <img
                src="/svg/angle-left.svg"
                width="45"
                height="45"
                alt="angle left"
                class="mr-4 pr-0.5 cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50"
                :class="isFirstPage() ? 'opacity-20 cursor-not-allowed' : ''"
                @click="goBack()"
              />
              <img
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
      </main>
    </div>
  </section>
</template>
