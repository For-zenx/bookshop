<script setup lang="ts">
import { useOpenModal } from "~/stores/OpenSearchModal";
import { onClickOutside } from "@vueuse/core";
const openModal = useOpenModal();
const modal = ref(null);
onClickOutside(modal, () => {
  openModal.toggleSearchModal();
});
</script>
<template>
  <div
    v-if="openModal.isOpenSearchModal"
    class="flex justify-center"
    ref="modal"
  >
    <div
      class="fixed rounded-lg bg-slate-800 shadow-lg min-w-full md:min-w-[550px] md:max-w-[550px] md:min-h-[200px] md:max-h-[400px] z-40 md:mt-12 p-3"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
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
        />
      </div>
    </div>
  </div>
</template>
