import type SocialLink from "./SocialLink";
import type Skill from "./Skill";

interface BirthDay {
    year: number;
    month: number;
    day: number;
}

interface UserInput {
    name: string;
    pronouns: string[];
    description: string;
    birthday: BirthDay;
    skills: Skill[];
    socials: SocialLink[];
}

export default class User {
    name: string;
    pronouns: string[];
    description: string;
    birthday: BirthDay;
    skills: Skill[];
    socials: SocialLink[];

    constructor(input: UserInput) {
        this.name = input.name;
        this.pronouns = input.pronouns;
        this.description = input.description;
        this.birthday = input.birthday;
        this.skills = input.skills;
        this.socials = input.socials;
    }

    getAge() {
        return new Date().getFullYear() - this.birthday.year;
    }

    getBirthday() {
        return new Date(
            `${this.birthday.year}-${this.birthday.month}-${this.birthday.day}`
        ).toLocaleString("en-us", {
            month: "short",
            year: "numeric",
            day: "numeric",
        });
    }
}
