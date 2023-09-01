<template>
  <section class="flex justify-center">
    <div
      class="max-w-5xl px-2 md:px-4 lg:px-8 pt-6 pb-12 mt-12 rounded-lg bg-gradient-to-br bg-slate-900"
    >
      <img
        src="/svg/arrow-return-left.svg"
        alt="arrow return left"
        width="40"
        height="40"
        class="mb-2 p-1 cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50 hover:text-gray-800"
        @click="router.push('/')"
      />
      <main v-for="book in books.library">
        <div v-if="id === book.id" class="grid grid-cols-1 md:flex">
          <img
            :src="book.cover"
            :alt="book.title"
            height="300"
            width="350"
            class="min-h-[480px] max-h-[480px] mr-12"
          />

          <div class="grid grid-rows-9">
            <h2
              class="uppercase text-gray-300 text-xl md:text-2xl font-bold mb-4"
            >
              {{ book.title }}
            </h2>
            <div class="mt-8 text-lg font-mono">
              Sinopsis: {{ book.synopsis }}
            </div>
            <div class="mt-6 font-mono">Autor: {{ book.author.name }}</div>
            <div class="mt-2 font-mono">Páginas: {{ book.pages }}</div>
            <div class="mt-2 font-mono">Género: {{ book.genre }}</div>
            <div class="mt-2 font-mono">Año: {{ book.year }}</div>
            <div class="mt-2 font-mono">ISBN: {{ book.ISBN }}</div>
            <div
              class="mt-6 font-mono"
              v-if="book.author.otherBooks.length !== 0"
            >
              Libros Relacionados: {{ book.author.otherBooks[0] }}.
              {{ book.author.otherBooks[1] }}
            </div>
            <div class="mt-6 font-mono" v-else>
              Libros Relacionados: No hay coincidencias
            </div>
            <div class="flex justify-end mt-8 mr-8">
              <img
                src="/svg/angle-left.svg"
                width="45"
                height="45"
                alt="angle left"
                class="mr-4 pr-0.5 cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50"
                :class="
                  route.fullPath === '/1'
                    ? ['opacity-20 cursor-not-allowed']
                    : ''
                "
                @click="goBack()"
              />
              <img
                src="/svg/angle-right.svg"
                width="45"
                height="45"
                alt="angle right"
                class="pl-0.5 cursor-pointer hover:bg-slate-800 hover:border-gray-400 hover:rounded-full duration-50"
                :class="
                  route.fullPath === '/13'
                    ? ['opacity-20 cursor-not-allowed']
                    : ''
                "
                @click="goForward()"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Books } from "~/types";

const { data: books } = await useFetch<Books>("/api/books/");

const { id } = useRoute().params;

const router = useRouter();

const route = useRoute();

const goBack = () => {
  const currentId = Number(route.params.id);
  if (currentId > 1) {
    router.push(`/${currentId - 1}`);
  }
};

const goForward = () => {
  const currentId = Number(route.params.id);
  if (currentId < 13) {
    router.push(`/${currentId + 1}`);
  }
};
</script>
