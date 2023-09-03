// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@@/assets/tailwind.css"],
  imports: {
    dirs: [..."types"],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { charset: "utf-8" },
        { hid: "keyword", name: "keyword", content: "yoyo" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt"],

  image: {
    inject: true,
    quality: 1,
    format: ["avif", "webp", "svg", "png", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
