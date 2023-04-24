// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  app: {
    head: {
      title: "Nuxt Shop",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Prototype for e-commerce site" },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
