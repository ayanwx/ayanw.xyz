// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            Raleway: [400],
            "Open+Sans": [400],
        },
        display: "swap",
        download: true,
        base64: true,
    },
});
