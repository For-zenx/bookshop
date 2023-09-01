<script setup lang="ts">
useHead({
  title: "",
  meta: [
    {
      hid: "page-index",
      name: "page-index",
      content: "My custom description",
    },
  ],
});
definePageMeta({
  layout: "default",
});
</script>

<template>
  <main class="body">
    <BaseIdBook />
  </main>
</template>
