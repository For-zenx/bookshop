<script setup lang="ts">
import { Books } from "~/types";
interface Props {
  title: string;
}
const props = defineProps<Props>();

const { data: books } = await useFetch<Books[]>(
  "https://bookshop-woad.vercel.app/books.json"
);
</script>
<template>
  <div class="flex justify-center">
    <div
      class="max-w-[400px] sm:max-w-xl md:max-w-6xl px-2 md:px-4 lg:px-8 py-12 mt-12 rounded-lg bg-slate-900"
    >
      <header>
        <h2 class="uppercase text-gray-300 text-2xl md:text-3xl font-bold mb-8">
          {{ props.title }}
        </h2>
      </header>
      <section
        class="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-y-6 gap-x-4"
      >
        <NuxtLink
          class="rounded-lg border border-gray-600 p-3 hover:bg-slate-800 hover:opacity-95 duration-100 cursor-pointer"
          v-for="b in books?.slice(5, 13)"
          :to="`/${b.id}`"
        >
          <img
            v-bind:src="b.cover"
            class="min-h-[250px] w-80 max-h-[250px] md:min-h-[290px] md:max-h-[290px]"
            height="300"
            width="300"
            :alt="b.title"
          />

          <h3 class="font-semibold line-clamp-1 hover:underline mt-2">
            {{ b.title }}
          </h3>
          <p
            class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1"
          >
            Autor: {{ b.author.name }}
          </p>
          <p
            class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1"
          >
            Género: {{ b.genre }}
          </p>
          <p
            class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1 italic"
          >
            Páginas: {{ b.pages }}
          </p>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>
