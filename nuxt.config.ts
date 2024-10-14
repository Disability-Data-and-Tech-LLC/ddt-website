// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Aclonica: true,
      Audiowide: true,
      "Playwrite GB S": {
        wght: "100..400",
        ital: "100..400",
      },
      "Signika Negative": {
        wght: "300..700",
        ital: "300..700",
      },
    },
  },
});
