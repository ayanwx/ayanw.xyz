<template>
    <section
        class="flex flex-col justify-center items-center text-[11.5px] font-mono text-grey relative bottom-[50px]"
    >
        <div class="flex">
            {{ "Designed by&nbsp;" }}
            <LinkTo url="https://github.com/ayanwx/" text="@AyanWx" />{{
                ", 2023"
            }}
        </div>
        <div class="flex">
            {{ "Using&nbsp;" }}
            <LinkTo url="https://nuxt.com/" text="Nuxt v3" />
            {{ "&nbsp;&amp;&nbsp;" }}
            <LinkTo url="https://tailwindcss.com/" text="Tailwind" />
        </div>
        <div class="flex">
            {{ "Hosted on&nbsp;" }}
            <LinkTo url="https://vercel.com/" text="Vercel" />
        </div>
    </section>
</template>
