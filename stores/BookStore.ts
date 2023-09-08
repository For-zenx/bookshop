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
      return this.bookList.filter((book) => book.isFav);
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

// {
//         library: [
//           {
//             title: "El señor de los anillos",
//             id: 1,
//             isFav: false,
//           },
//           {
//             title: "Juego de Tronos",
//             id: 2,
//             isFav: false,
//           },
//           {
//             title: "Neuromante",
//             id: 3,
//             isFav: false,
//           },
//         ],
//       },
