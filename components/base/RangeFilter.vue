<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBookStore } from "~/stores/BookStore";

const bookStore = useBookStore();
const { fetchBook, handleMinPageInput, handleMaxPageInput, maxPagesArray } =
  bookStore;
const { bookList, minPageInput, maxPageInput } = storeToRefs(bookStore);

await fetchBook();
</script>
<template>
  <div class="mb-6 text-center md:text-start">
    <div class="pb-1">Search by page range</div>
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
        :placeholder="`${maxPagesArray()}`"
        type="number"
        v-model="maxPageInput"
        @input="handleMaxPageInput"
      />
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
