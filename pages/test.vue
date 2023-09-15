<template>
  <div>
    <input type="text" class="bg-gray-200" v-model="searchBookInput" />
    <div v-for="book in filteredBooks" :key="book.id">
      <span v-html="matchingLetters(book.title)"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from "~/stores/BookStore";
const bookStore = useBookStore();
const { fetchBook } = bookStore;

await fetchBook();

const searchBookInput = ref("");

const matchingLetters = (title: string) => {
  const searchTerm = searchBookInput.value.trim().toLowerCase();
  if (searchTerm.length === 0) return title;

  const titleLowerCase = title.toLowerCase();
  let startIndex = titleLowerCase.indexOf(searchTerm);

  if (startIndex === -1) return title;

  let highlightedTitle = "";

  for (let i = 0; i < title.length; i++) {
    if (i === startIndex) {
      highlightedTitle += `<strong>${title[i]}</strong>`;
      i++;
      while (i < title.length && searchTerm.includes(titleLowerCase[i])) {
        highlightedTitle += `<strong>${title[i]}</strong>`;
        i++;
      }
    }

    highlightedTitle += title[i];
  }

  return highlightedTitle;
};

const filteredBooks = computed(() => {
  const searchTerm = searchBookInput.value.trim().toLowerCase();
  const filtered = bookStore.bookList
    .filter((book) => {
      const titleMatches = book.title.toLowerCase().includes(searchTerm);
      const genreMatches = book.genre.toLowerCase().includes(searchTerm);
      return titleMatches || genreMatches;
    })
    .slice(0, 5);

  return filtered;
});
</script>
