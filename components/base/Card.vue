<script setup lang="ts">
interface Props {
  title: string;
  posts: { img: string; title: string; link: string; date: string }[];
}
const props = defineProps<Props>();
</script>
<template>
  <div
    class="mx-4 sm:mx-12 lg:mx-48 px-4 lg:px-8 py-12 mt-12 rounded-lg bg-slate-800"
  >
    <header>
      <h2 class="uppercase text-gray-300 text-2xl md:text-3xl font-bold mb-8">
        {{ props.title }}
      </h2>
    </header>
    <section
      class="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-y-6 gap-x-8"
    >
      <div
        class="rounded-lg border border-gray-600 flex flex-wrap p-3 hover:bg-slate-900 hover:opacity-95 duration-100"
        v-for="post in props.posts"
      >
        <NuxtLink :to="post.link">
          <nuxt-img
            v-bind:src="post.img"
            class="md:w-[328px] md:h-[260px] flex-grow"
          />
        </NuxtLink>
        <NuxtLink :to="post.link">
          <h4 class="text-xs sm:text-base font-semibold py-2">
            {{ post.title }}
          </h4>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
