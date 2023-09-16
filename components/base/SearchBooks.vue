<script setup lang="ts">
import { useMouseInElement } from "@vueuse/core";
import { useOpenModal } from "../../stores/OpenSearchModal";
import { breakpointsTailwind } from "@vueuse/core";
import { useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const md = breakpoints.greaterOrEqual("md");

const openModal = useOpenModal();
const searchButton = ref(null);
const { isOutside: isMouseOutside } = useMouseInElement(searchButton);

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && openModal.isOpenSearchModal) {
    openModal.toggleSearchModal();
  } else if (event.ctrlKey && event.key === "k") {
    event.preventDefault();
    openModal.toggleSearchModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <button
    aria-label="Search..."
    ref="searchButton"
    :class="[
      !isMouseOutside
        ? 'opacity-100  duration-200  border-slate-300'
        : 'opacity-80 duration-200  border-gray-500',
      md ? 'min-w-[180px]' : 'min-w-[110px]',
    ]"
    class="border-[2px] rounded-md max-h-[38px] mt-0.5"
    @click="openModal.toggleSearchModal()"
  >
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 mx-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <span>Search...</span>
      <span
        v-if="md"
        class="border-[1px] border-gray-700 bg-slate-900 py-[0.2px] px-1 mr-1 rounded-sm ml-8 text-sm"
        >Ctrl K</span
      >
    </div>
  </button>
</template>
