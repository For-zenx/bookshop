<script lang="ts" setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();

const toggleMode = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <button
    :class="isDark ? 'bg-slate-600' : 'bg-slate-300'"
    @click="toggleMode"
    class="w-8 transition-all duration-200 h-5 flex items-center rounded-full p-0.5 cursor-pointer"
  >
    <div
      :class="{ 'translate-x-3': isDark }"
      class="w-4 h-4 transition-all duration-200 transform bg-white dark:bg-slate-700 rounded-full shadow-md"
    >
      <nuxt-img
        :src="isDark ? '/svg/moon.svg' : '/svg/sun.svg'"
        height="25"
        width="25"
        alt="Dark/Light Transition"
      />
    </div>
  </button>
</template>
