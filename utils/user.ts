import User from "./User";
// modify this file to add your own information

export const user = new User({
    name: "AyanW",
    pronouns: ["Them", "He", "She"], // at least one value required
    description: "High school student, interested in game development.",
    birthday: {
        month: 12,
        day: 30,
        year: 2005,
    },
    skills: [
        { name: "NodeJS", color: "#exm" },
        { name: "TypeScript", color: "#exm" },
        { name: "Unity", color: "#000" },
        { name: "C#", color: "#exm" },
        { name: "C++", color: "#exm" },
    ],
    socials: [
        { type: "GitHub", username: "ayanvw", link: "", icon: "" },
        { type: "Twitter", username: "_ayanw_", link: "", icon: "" },
    ],
});
