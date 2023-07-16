// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf8",
            viewport: "width=device-width, initial-scale=1",
            title: "AyanW",
            meta: [{ name: "description", content: "Student, Programmer" }],
        },
    },
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            Raleway: [400],
            "Open+Sans": [400],
        },
        display: "swap",
        download: true,
        inject: true,
    },
});
