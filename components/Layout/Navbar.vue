<script lang="ts" setup>
import { useWindowScroll } from "@vueuse/core";
const router = useRouter();
const route = useRoute();
const { y } = useWindowScroll();
const goToHome = () => {
  route.path === "/" ? document.location.reload() : router.push("/");
};
</script>

<template>
  <nav
    :class="
      y > 10 ? 'border-b-[1px] shadow shadow-slate-900 border-slate-900' : ''
    "
    class="navbar flex justify-between pt-2"
  >
    <div class="cursor-pointer" @click="goToHome()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        class="w-9 h-9 text-slate-800 mt-[2px]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
        />
      </svg>
    </div>
    <BaseSearchBooks />
    <BaseSavedBooks />
  </nav>
  <BaseSearchModal />
</template>
