<script setup lang="ts">
import { useRoute } from "vue-router";
import { Books } from "~/types";
const route = useRoute();

const { data: books } = await useFetch<Books>("/api/books/");

const bookInfo = books.value?.library.find((book) => {
  return book.id === route.params.id;
});

const headerTitle = bookInfo?.title;

useHead(() => {
  return {
    title: headerTitle,
    meta: [{ property: "og:title", content: headerTitle }],
  };
});
</script>

<template>
  <main class="body">
    <BaseIdBook />
  </main>
</template>
