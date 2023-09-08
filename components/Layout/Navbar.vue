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
    class="navbar flex justify-between pt-2"
  >
    <img
      src="/svg/cube-navbar.svg"
      class="w-9 h-9 cursor-pointer"
      @click="goToHome()"
      width="20"
      height="20"
      alt="Menu"
    />
    <BaseSavedBooks />
  </nav>
</template>
