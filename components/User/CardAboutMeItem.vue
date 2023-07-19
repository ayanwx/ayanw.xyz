<template>
    <span role="listitem" class="flex">
        <img
            class="inline-flex h-[15px] w-auto mt-[4px] mr-[4px]"
            draggable="false"
            :src="emojiURL(emoji)"
        />
        {{ text }}
    </span>
</template>

<script setup lang="ts">
defineProps<{ emoji: string; text: string }>();

const emojiURL = (e: string) => {
    return "/images/emojis/" + e + ".png";
};
</script>
