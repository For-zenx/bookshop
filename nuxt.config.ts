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
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "keyword", name: "keyword", content: "yoyo" },
        { hid: "description", name: "description", content: "FINPO project" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt"],

  image: {
    inject: true,
    quality: 0,
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
