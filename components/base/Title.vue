<script lang="ts" setup>
interface Props {
  title: string;
}
const props = defineProps<Props>();
</script>

<template>
  <main class="flex justify-center pt-8">
    <h1
      class="md:text-5xl text-4xl uppercase font-bold tracking-wide leading-none bg-gradient-to-r from-cyan-300 via-pink-200 to-violet-500 text-transparent bg-clip-text text-center select-none"
    >
      {{ props.title }}
    </h1>
  </main>
</template>
