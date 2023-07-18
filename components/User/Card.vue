<template>
    <section
        class="flex flex-col text-left text-[12px] w-[300px] h-auto bg-card_bg rounded-[7.5px]"
    >
        <div class="flex">
            <UserCardBanner />
        </div>
        <div class="p-4 flex flex-col">
            <div class="font-[Raleway] text-2xl mt-3">{{ user.name }}</div>
            <div class="text-grey mb-3">
                {{ user.pronouns.join("/") }} | {{ user.getAge() }}
            </div>
            <UserCardDescription />
        </div>
        <div></div>
    </section>
</template>

<script setup></script>
