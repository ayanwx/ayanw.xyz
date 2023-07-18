<template>
    <span role="listitem" class="flex">
        <img
            :src="emojiURL(emoji)"
            class="inline-flex h-[15px] w-auto mt-[4px] mr-[4px]"
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
