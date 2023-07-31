<template>
    <ul class="flex flex-col text-grey opacity-70 text-[11px] p-4">
        <li>
            <LinkTo
                url="https://www.pixiv.net/en/artworks/68570412"
                text="Avatar"
            />
            {{ "&nbsp;by &nbsp;" }}
            <LinkTo
                url="https://www.pixiv.net/en/users/22160663"
                text="あをじ"
            />
            {{ "&nbsp;|&nbsp;" }}
            <LinkTo
                url="https://www.pixiv.net/en/artworks/110238292"
                text="Banner"
            />
            {{ "&nbsp;by &nbsp;" }}
            <LinkTo
                url="https://www.pixiv.net/en/users/41170261"
                text="こきん"
            />
        </li>
        <li>
            {{ "Social media icons by&nbsp;" }}
            <LinkTo url="https://simpleicons.org/" text="SimpleIcons" />
        </li>
        <li class="flex">
            {{ "Designed by&nbsp;" }}
            <LinkTo url="https://github.com/ayanwx/" text="@AyanWx" />
            {{ ", 2023" }}
        </li>
        <li>
            {{ "Using&nbsp;" }}
            <LinkTo url="https://nuxt.com/" text="Nuxt v3" />
            {{ "&nbsp;&amp;&nbsp;" }}
            <LinkTo url="https://tailwindcss.com/" text="Tailwind" />
        </li>
        <li>
            {{ "Hosted on&nbsp;" }}
            <LinkTo url="https://vercel.com/" text="Vercel" />
        </li>
    </ul>
</template>
