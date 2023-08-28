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
  </nav>
</template>
