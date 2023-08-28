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
    <BaseCard
      title="Books Section"
      :posts="[
        {
          title: 'The Lord of the Rings The Fellowship of the Ring',
          date: '8 november, 2020',
          img: '/img/lotr.png',
          link: '',
        },
        {
          title: 'The Lord of the Rings The Fellowship of the Ring',
          date: '8 november, 2020',
          img: '/img/lotr2.png',
          link: '',
        },
        {
          title: 'The Lord of the Rings The Fellowship of the Ring',
          date: '8 november, 2020',
          img: '/img/lotr3.png',
          link: '',
        },
        {
          title: 'The Lord of the Rings The Fellowship of the Ring',
          date: '8 november, 2020',
          img: '/img/ten-little-niggers.png',
          link: '',
        },
        {
          title: 'The Lord of the Rings The Fellowship of the Ring',
          date: '8 november, 2020',
          img: '/img/got.png',
          link: '',
        },
        {
          title: 'The Lord of the Rings The Fellowship of the Ring',
          date: '8 november, 2020',
          img: '/img/got2.png',
          link: '',
        },
        {
          title: 'The Lord of the Rings The Fellowship of the Ring',
          date: '8 november, 2020',
          img: '/img/clean-code.png',
          link: '',
        },
        {
          title: 'The Lord of the Rings The Fellowship of the Ring',
          date: '8 november, 2020',
          img: '/img/eloquentjs.png',
          link: '',
        },
      ]"
    />
  </main>
</template>
