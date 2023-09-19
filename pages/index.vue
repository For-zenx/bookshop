<script lang="ts" setup>
useHead({
  title: "Bookshop Online",
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
    <BaseBooksTable title="Books Section" />
  </main>
</template>
