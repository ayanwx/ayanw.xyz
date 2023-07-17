<template>
    <section class="text-left w-[300px] p-4 bg-[#1c1b22] rounded-[5px]">
        <UserAvatar />
        <div class="font-[Raleway] text-2xl mt-3">{{ user.name }}</div>
        <div class="text-grey text-[12px]">
            {{ user``.pronouns.join("/") }} | {{ user.getAge() }}
        </div>
    </section>
</template>

<script setup></script>
