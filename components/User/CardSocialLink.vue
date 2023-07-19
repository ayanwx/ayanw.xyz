<template>
    <div
        class="inline-flex p-[4px] mr-[2px] mt-[2px] bg-[#29303a] text-[11.5] font-mono rounded-[3px] items-center justify-center"
    >
        <a
            class="inline-flex rounded-full h-[16px] w-[16px] mr-[4px] ml-[4px]"
            :href="link"
        >
            <img :src="iconLink(icon)" />
        </a>
    </div>
</template>

<script setup lang="ts">
defineProps<{ link: string; icon: string }>();

const iconLink = (icon: string) => {
    let color: string = "";

    if (icon === "github") color = "ffffff";
    return "https://cdn.simpleicons.org/" + icon + "/" + color;
};
</script>
