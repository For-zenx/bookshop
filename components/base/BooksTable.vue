<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBookStore } from "~/stores/BookStore";

const { title } = defineProps<{ title: string }>();

const bookStore = useBookStore();
const { fetchBook, obtainToggleHistory, toggleFav } = bookStore;
const { bookList } = storeToRefs(bookStore);

await fetchBook();

onMounted(() => {
  obtainToggleHistory();
});

const router = useRouter();

const minPageInput = ref<number | null>(null);
const maxPageInput = ref<number | null>(null);
let maxPagesArray = bookList.value.reduce(
  (maxPages, item) => Math.max(maxPages, item.pages),
  0
);
const handleMinPageInput = () => {
  minPageInput.value = Math.max(
    1,
    Math.min(maxPagesArray, +minPageInput.value)
  );
};
const handleMaxPageInput = () => {
  if (maxPageInput.value === null) {
    return;
  }
  maxPageInput.value = Math.max(
    1,
    Math.min(maxPagesArray, +maxPageInput.value || maxPagesArray)
  );
};
const filteredBooks = computed(() => {
  const minPage = minPageInput.value;
  const maxPage = maxPageInput.value;

  return bookList.value.filter((book) => {
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
      class="max-w-5xl px-2 md:px-4 lg:px-8 py-6 md:py-12 mt-12 rounded-lg bg-slate-900 mx-1 sm:mx-12 md:mx-1"
    >
      <header>
        <h2
          class="uppercase text-gray-300 text-2xl md:text-3xl font-bold mb-2 text-center md:text-left"
        >
          {{ title }}
        </h2>
      </header>
      <div class="mb-6 text-center md:text-start">
        <div class="pb-1">Busca por rango de páginas</div>
        <div class="flex justify-center md:justify-normal space-x-4">
          <p>Min:</p>
          <input
            id="minPageInput"
            class="remove-arrow w-9 bg-slate-900 border-b-2 border-slate-500"
            placeholder="1"
            type="number"
            v-model="minPageInput"
            @input="handleMinPageInput"
          />
          <p>Max:</p>
          <input
            id="maxPageInput"
            class="remove-arrow w-9 bg-slate-900 border-b-2 border-slate-500"
            :placeholder="`${maxPagesArray}`"
            type="number"
            v-model="maxPageInput"
            @input="handleMaxPageInput"
          />
        </div>
      </div>
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
              @click="router.push(String(book.id))"
            />
            <h3
              class="font-semibold line-clamp-1 hover:underline mt-2 pl-1 cursor-pointer"
              @click="router.push(String(book.id))"
            >
              {{ book.title }}
            </h3>
            <p
              class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1 pl-1 cursor-pointer"
              @click="router.push(String(book.id))"
            >
              Autor: {{ book.author.name }}
            </p>
            <p
              class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1 pl-1 cursor-pointer"
              @click="router.push(String(book.id))"
            >
              Género: {{ book.genre }}
            </p>
            <p
              class="align-sub line-clamp-1 hover:underline text-sm font-mono mt-1 italic pl-1 cursor-pointer"
              @click="router.push(String(book.id))"
            >
              Páginas: {{ book.pages }}
            </p>
            <div
              class="flex justify-center border-t-[1px] border-gray-500 mt-2 cursor-pointer"
              @click="bookStore.toggleFav(Number(book.id))"
            >
              <div
                class="mt-1 -mb-1 rounded-lg border-[1px] border-black"
                :class="{
                  'bg-gray-500 transition-colors duration-50 md:duration-100':
                    book.isFav,
                  'bg-green-700 transition-colors duration-50 md:duration-100':
                    !book.isFav,
                }"
              >
                <nuxt-img
                  :src="book.isFav ? '/svg/minus.svg' : '/svg/plus.svg'"
                  height="25"
                  width="25"
                  alt="Minus/Plus"
                />
              </div>
            </div>
          </div>
        </template>
        <div v-else class="col-span-2 md:col-start-2">
          <h3 class="text-xl text-center md:text-4xl mt-12">
            No se han encontrado libros
          </h3>
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

<style scoped>
.remove-arrow::-webkit-inner-spin-button,
.remove-arrow::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
