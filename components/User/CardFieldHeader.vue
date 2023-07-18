<template>
    <div class="flex font-[7px] text-grey">{{ text }}</div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>
