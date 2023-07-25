import User from "./User";
import Skill from "./User/Skill";
import SocialLink from "./User/SocialLink";
// modify this file to add your own information

export const user = new User({
    name: "AyanW",
    pronouns: ["They", "He", "She"], // at least one value required
    description: "High school student, self-taught programmer.",
    birthday: {
        month: 12,
        day: 30,
        year: 2005,
    },
    skills: [
        new Skill({ name: "NodeJS", color: "#43853d" }),
        new Skill({ name: "TypeScript", color: "#0288d1" }),
        new Skill({ name: "Unity", color: "#ffffff" }),
        new Skill({ name: "C++", color: "#f34b7d" }),
    ],
    socials: [
        new SocialLink({
            type: "discord",
            username: "ayan.w",
            link: "https://discord.com/users/601613637551128623",
        }),
        new SocialLink({
            type: "github",
            username: "ayanwx",
            link: "https://github.com/ayanwx/",
            color: "ffffff",
        }),
        new SocialLink({
            type: "youtube",
            username: "ayanwdev",
            link: "https://www.youtube.com/channel/UCKurIBkOnxUPrzR4JXxxMiA",
        }),
        new SocialLink({
            type: "twitter",
            username: "_ayanw_",
            link: "https://twitter.com/_ayanw_",
        }),
        new SocialLink({
            type: "gmail",
            username: "ayanxdev@gmail.com",
            link: "mailto:ayanxdev@gmail.com",
        }),
    ],
});
