import User from "./User";
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
        { name: "NodeJS", color: "#43853d" },
        { name: "TypeScript", color: "#0288d1" },
        { name: "Unity", color: "#ffffff" },
        { name: "C++", color: "#f34b7d" },
    ],
    socials: [
        {
            type: "discord",
            username: "ayan.w",
            link: "https://discord.com/users/601613637551128623",
        },
        {
            type: "github",
            username: "ayanvw",
            link: "https://github.com/ayanvw/",
        },
        {
            type: "youtube",
            username: "ayanwdev",
            link: "https://www.youtube.com/channel/UCKurIBkOnxUPrzR4JXxxMiA",
        },
        {
            type: "twitter",
            username: "_ayanw_",
            link: "https://twitter.com/_ayanw_",
        },
        {
            type: "gmail",
            username: "ayanxdev@gmail.com",
            link: "mailto:ayanxdev@gmail.com",
        },
    ],
});
