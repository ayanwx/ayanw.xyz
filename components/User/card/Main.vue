<template>
    <section class="flex flex-col text-left text-[14px] w-[285px] h-auto">
        <section class="flex">
            <UserCardBanner />
        </section>
        <section class="flex flex-col p-4 bg-card_bg">
            <div class="font-[Raleway] text-2xl mt-3">{{ user.name }}</div>
            <div class="text-grey mb-3 select-none">
                {{ user.pronouns.join("/") }} {{ "|" }} {{ user.getAge() }}
            </div>
            <UserCardDescription />
            <div class="flex flex-col pt-4">
                <UserCardFieldHeader text="About Me" />
                <div class="flex flex-col" role="list">
                    <UserCardAboutMeItem
                        v-for="item in aboutMeItems"
                        v-bind:key="item.emoji"
                        :emoji="item.emoji"
                        :text="item.text"
                    />
                </div>
            </div>
            <div class="flex flex-col pt-4">
                <UserCardFieldHeader text="Skills" />
                <div class="flex flex-row flex-wrap">
                    <UserCardSkill
                        v-for="skill in user.skills"
                        v-bind:key="skill.name"
                        :name="skill.name"
                        :color="skill.color"
                    />
                </div>
            </div>
            <div class="flex flex-col pt-4">
                <UserCardFieldHeader text="Socials" />
                <div class="flex flex-row flex-wrap">
                    <UserCardSocialLink
                        v-for="item in user.socials"
                        v-bind:key="item.type"
                        :link="item.link"
                        :icon="item.type"
                        :color="item.color"
                        :title="item.username"
                    />
                </div>
            </div>
        </section>
        <section class="flex">
            <UserCardFooter />
        </section>
    </section>
</template>

<script setup>
import { user } from "~/utils/user";

const aboutMeItems = [
    { emoji: "earth-asia-aus", text: `Birthday: ${user.getBirthday()}` },
    { emoji: "gear", text: "Learning Rust & Bevy" },
    { emoji: "snowflake", text: "Like to play games/watch anime" },
    { emoji: "arch", text: "I use Arch btw" },
];
</script>
