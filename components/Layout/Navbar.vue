<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const md = breakpoints.smallerOrEqual("md");
const lg = breakpoints.greaterOrEqual("md");
</script>

<template>
  <nav class="navbar flex justify-between">
    <div class="flex">
      <BaseText>Navbar </BaseText>
    </div>
    <div class="flex md:justify-between md:col-end-4">
      <BaseButtonSecondary icon="/svg/angle-down.svg"
        >First</BaseButtonSecondary
      >
      <BaseButtonSecondary icon="/svg/angle-down.svg"
        >Second</BaseButtonSecondary
      >
      <BaseButtonSecondary v-if="lg">Third</BaseButtonSecondary>
      <BaseButtonSecondary v-if="lg">Fourth</BaseButtonSecondary>
      <BaseButtonSecondary v-if="lg">Fifth</BaseButtonSecondary>
      <nuxt-img
        v-if="md"
        src="/svg/menu.svg"
        height="15"
        width="15"
        alt="menu"
        class="mx-2"
      />
    </div>
  </nav>
</template>
