// https://nuxt.com/docs/api/configuration/nuxt-config
const name = "AyanW";
const description = "Personal website and portfolio of AyanW";

export default defineNuxtConfig({
    app: {
        head: {
            title: name,
            charset: "utf8",
            viewport: "width=device-width, initial-scale=1",
            htmlAttrs: { lang: "en" },
            link: [
                { rel: "icon", href: "/favicon.ico" },
                { rel: "canonical", href: "https://ayanw.xyz/" },
                { rel: "alternate", href: "https://ayanw.xyz/" },
            ],
            meta: [
                { name: "description", content: description },

                { name: "author", content: "AyanW, ayanxdev@gmail.com" },
                { name: "identifier-URL", content: "https://ayanw.xyz/" },
                { name: "owner", content: "AyanW, ayanxdev@gmail.com" },
                {
                    name: "keywords",
                    content: "ayanw, gamedev, programming, portfolio",
                },
                { property: "og:description", content: description },
                {
                    property: "og:image",
                    content: "/images/meta/avatar.png",
                },
                { property: "og:locale", content: "en" },
                { property: "og:title", content: name },
                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://ayanw.xyz/" },
                { name: "darkreader-lock" },
            ],
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
    },
});
