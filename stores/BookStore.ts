import { defineStore } from "pinia";
import { Books, Book } from "~/types";

export const useBookStore = defineStore("bookList", {
  state: () => ({
    bookList: [] as Book[],
    minPageInput: <number | null>null,
    maxPageInput: <number | null>null,
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
    filteredBooks(): Book[] {
      const minPage = this.minPageInput;
      const maxPage = this.maxPageInput;

      return this.bookList.filter((book) => {
        const page = book.pages;

        if (minPage !== null && maxPage !== null) {
          return page >= minPage && page <= maxPage;
        }

        if (minPage !== null) {
          return page >= minPage;
        }

        if (maxPage !== null) {
          return page <= maxPage;
        }

        return true;
      });
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
      const book = this.bookList.find((t) => t.id === id);
      if (book) {
        book.isFav = !book.isFav;
      }
      localStorage.setItem("favBooks", JSON.stringify(this.bookList));
    },
    obtainToggleHistory() {
      const data = localStorage.getItem("favBooks");
      if (data) {
        this.bookList = JSON.parse(data);
      }
    },
    maxPagesArray() {
      const maxPages = this.bookList.reduce(
        (maxPages, item) => Math.max(maxPages, item.pages),
        0
      );
      return maxPages;
    },
    handleMinPageInput() {
      const minPage = this.minPageInput !== null ? this.minPageInput : 0;
      this.minPageInput = Math.max(1, Math.min(this.maxPagesArray(), minPage));
    },
    handleMaxPageInput() {
      if (this.maxPageInput === null) {
        return;
      }
      this.maxPageInput = Math.max(
        1,
        Math.min(
          this.maxPagesArray(),
          +this.maxPageInput || this.maxPagesArray()
        )
      );
    },
  },
});
