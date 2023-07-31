<template>
    <a class="underline inline" :href="url" target="_blank">{{
        text ?? url
    }}</a>
</template>

<script setup lang="ts">
defineProps<{ url: string; text: string }>();
</script>
