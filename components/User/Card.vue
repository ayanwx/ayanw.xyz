<template>
    <section class="text-left w-[256px] p-4 bg-[#1c1b22]">
        <UserAvatar />
        <div class="font-[Raleway] text-2xl mt-3">{{ userinfo.name }}</div>
        <div class="text-grey text-[12px]">
            {{ userinfo.pronouns.join("/") }}
        </div>
    </section>
</template>

<script setup></script>
