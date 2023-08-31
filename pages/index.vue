import { Title } from '../.nuxt/components';
<script lang="ts" setup>
useHead({
  title: "home",
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
    <BaseTitle title="bookshop online" />
    <BaseBooksTable title="Books Section" />
  </main>
</template>
