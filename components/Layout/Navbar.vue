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
    :class="y > 10 ? 'border-b-2 border-slate-800 duration-500' : ''"
    class="navbar flex justify-between"
  >
    <img
      src="/svg/cube-navbar.svg"
      class="w-10 h-10 cursor-pointer"
      @click="goToHome()"
      width="20"
      height="20"
      alt="Menu"
    />
    <BaseSavedBooks />
  </nav>
</template>
