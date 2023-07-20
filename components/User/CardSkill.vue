<template>
    <div
        class="inline-flex flex-row p-[2px] pr-[7px] mr-[2px] mt-[2px] bg-[#29303a] text-[11.5] font-mono rounded-[3px] items-center justify-center select-none"
    >
        <span
            class="inline-flex rounded-full h-[12px] w-[12px] mr-[4px] ml-[4px]"
            :style="{ 'background-color': color }"
        ></span>
        <span class="inline-flex">{{ name }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; color: string }>();
</script>
