<template>
    <div class="flex font-[7px] text-grey select-none">{{ text }}</div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>
