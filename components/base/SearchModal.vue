<script setup lang="ts">
import { useOpenModal } from "~/stores/OpenSearchModal";
import { useBookStore } from "~/stores/BookStore";
import { onClickOutside } from "@vueuse/core";
import { breakpointsTailwind } from "@vueuse/core";
import { useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const md = breakpoints.smallerOrEqual("md");

const router = useRouter();
const bookStore = useBookStore();
const { fetchBook } = bookStore;
await fetchBook();

const openModal = useOpenModal();
const modal = ref(null);
onClickOutside(modal, () => {
  openModal.toggleSearchModal();
});
const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
};

const searchBookInput = ref("");
const noSearchFound = computed(() => {
  const searchTerm = searchBookInput.value.replace(/\s+/g, "").toLowerCase();
  const filtered = bookStore.bookList
    .filter((book) =>
      book.title.replace(/\s+/g, "").toLowerCase().includes(searchTerm)
    )
    .slice(0, 5);

  return filtered.length === 0 || searchBookInput.value.length === 0;
});

const filteredBooks = computed(() => {
  const searchTerm = searchBookInput.value.replace(/\s+/g, "").toLowerCase();
  const filtered = bookStore.bookList
    .filter((book) => {
      const titleMatches = book.title
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(searchTerm);
      return titleMatches;
    })
    .slice(0, 5);

  return filtered;
});
</script>
<template>
  <Transition name="slide-fade">
    <div
      v-if="openModal.isOpenSearchModal"
      class="fixed -top-[55px] md:top-0 left-0 w-full h-full flex justify-center mt-14 bg-black bg-opacity-50 z-50 text-gray-300"
    >
      <div
        class="fixed md:rounded-lg bg-slate-800 shadow-lg min-w-full min-h-full md:min-w-[550px] md:max-w-[550px] md:min-h-[200px] md:max-h-[430px] z-40 md:mt-12 p-3"
        ref="modal"
      >
        <div class="flex mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            class="w-6 h-6 fixed mt-4 mx-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            class="w-full h-14 bg-slate-700 px-10 rounded-md border-2 border-slate-300 text-lg"
            placeholder="Search books"
            v-model="searchBookInput"
            v-focus="openModal.isOpenSearchModal"
          />
          <div
            v-if="md"
            class="mx-2 my-3 cursor-pointer underline text-white"
            @click="openModal.toggleSearchModal()"
          >
            Cancel
          </div>
        </div>
        <div
          v-if="noSearchFound"
          class="flex justify-center items-center mt-64 md:mt-14 text-lg"
        >
          No search found
        </div>
        <div v-else>
          Books
          <div
            v-for="book in filteredBooks"
            class="min-h-[57px] items-center my-1 rounded-md px-4 bg-slate-700 cursor-pointer hover:bg-slate-500 hover:underline grid grid-cols-12"
            @click="router.push(String(book.id)), openModal.toggleSearchModal()"
          >
            <div class="col-span-11 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :fill="book.isFav ? 'rgb(22 163 74)' : 'none'"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                :stroke="book.isFav ? '#000000' : 'currentColor'"
                class="w-6 h-6 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <span class="line-clamp-1">{{ book.title }}</span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.07s ease-out;
  @media (min-width: 768px) {
    transition: all 0.15s ease-out;
  }
}

.slide-fade-leave-active {
  transition: all 0.07s cubic-bezier(1, 0.5, 0.8, 1);
  @media (min-width: 768px) {
    transition: all 0.15s ease-out;
  }
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
