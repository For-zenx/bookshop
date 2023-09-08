<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useBookStore } from "~/stores/BookStore";
import { Books } from "~/types";

const bookStore = useBookStore();

const { fetchBook } = bookStore;

const { bookList } = storeToRefs(bookStore);

await fetchBook();
</script>

<template>
  <div>Tienes un total de {{ bookStore.totalCount }} libros para leer.</div>
  <div v-for="book in bookStore.bookList">
    {{ book.title }} -- id: {{ book.id }} -- favorito: {{ book.isFav }}
    <button @click="bookStore.toggleFav(Number(book.id))">(favorite)</button>
  </div>
  <div>
    Tienes un total de {{ bookStore.favCount }} libros que te han gustado.
  </div>
  <div v-for="book in bookStore.favs">
    {{ book.title }} -- id: {{ book.id }} -- favorito: {{ book.isFav }}
    <button @click="bookStore.toggleFav(Number(book.id))">
      (eliminar de favoritos)
    </button>
  </div>
</template>
