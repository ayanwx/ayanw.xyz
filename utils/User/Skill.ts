export default class Skill {
    name: string;
    color: string;

    constructor(input: { name: string; color: string }) {
        this.name = input.name;
        this.color = input.color;
    }
}
