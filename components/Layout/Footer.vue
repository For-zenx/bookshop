<script setup lang="ts">
import { useMouseInElement } from "@vueuse/core";
import { useWindowScroll } from "@vueuse/core";
const target = ref(null);
const { isOutside } = useMouseInElement(target);
</script>
<template>
  <div class="footer">
    <NuxtLink
      ref="target"
      class="github-link duration-100"
      to="https://github.com/For-zenx/bookshop"
      target="_blank"
      :class="isOutside ? '' : '-translate-y-0.5 ease-in-out'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#ffffff"
        class="mt-[5px]"
      >
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
      <span class="ml-2 mr-0.5" :class="isOutside ? '' : ' underline'"
        >GitHub</span
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-2 h-2 mt-2"
        :class="isOutside ? 'invisible' : '-translate-y-1 '"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </NuxtLink>
  </div>
</template>
<style scoped>
.footer {
  bottom: 0;
  background-color: #020617;
  border-top: 1px solid #1e293b;
  color: white;
  display: flex;
  justify-content: flex-end;
}

.github-link {
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  display: flex;
  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
