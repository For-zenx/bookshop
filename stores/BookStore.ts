import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { Books, Book } from "~/types";

export const useBookStore = defineStore("bookList", {
  state: () => ({
    bookList: [] as Book[],
  }),
  getters: {
    totalCount: (state) => {
      return state.bookList.length;
    },
    favs(): Book[] {
      const favoriteBooks = this.bookList.filter((book) => book.isFav);
      return favoriteBooks;
    },
    favCount(): number {
      return this.bookList.reduce((count, book) => {
        return book.isFav ? count + 1 : count;
      }, 0);
    },
  },
  actions: {
    async fetchBook() {
      const { data: books }: any = await useFetch("/api/books");
      if (books.value) {
        this.bookList = books.value.library;
      }
    },
    async toggleFav(id: number) {
      const book = this.bookList.find((t) => Number(t.id) === id);
      if (book) {
        book.isFav = !book.isFav;
      }
    },
  },
});
