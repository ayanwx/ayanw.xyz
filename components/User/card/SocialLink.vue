<template>
    <a
        class="inline-flex p-[4px] mr-[2px] mt-[2px] bg-[#29303a] text-[11.5] font-mono rounded-[3px] items-center justify-center"
        target="_blank"
        :href="link"
    >
        <img
            class="inline-flex h-[16px] w-[16px] mr-[4px] ml-[4px] select-none"
            :src="iconLink(icon, color)"
        />
    </a>
</template>

<script setup lang="ts">
defineProps<{ link: string; icon: string; color: string }>();

const iconLink = (icon: string, color: string) => {
    return "https://cdn.simpleicons.org/" + icon + (color ? "/" + color : "");
};
</script>
