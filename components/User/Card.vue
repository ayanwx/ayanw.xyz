<template>
    <section
        class="flex flex-col text-left text-[14px] w-[285px] h-auto bg-card_bg"
    >
        <section class="flex">
            <UserCardBanner />
        </section>
        <section class="p-4 flex flex-col">
            <div class="font-[Raleway] text-2xl mt-3">{{ user.name }}</div>
            <div class="text-grey mb-3">
                {{ user.pronouns.join("/") }} | {{ user.getAge() }}
            </div>
            <UserCardDescription />
            <div class="flex flex-col pt-4 pb-4">
                <UserCardFieldHeader text="About Me" />
                <div
                    class="flex flex-col"
                    role="list"
                    v-for="item in aboutMeItems"
                    v-bind:key="item.emoji"
                >
                    <UserCardAboutMeItem
                        :emoji="item.emoji"
                        :text="item.text"
                    />
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
const aboutMeItems = [
    { emoji: "gear", text: "Learning Unity & C++" },
    { emoji: "snowflake", text: "Like to play games/watch anime" },
    { emoji: "arch", text: "I use Arch btw" },
];
</script>
