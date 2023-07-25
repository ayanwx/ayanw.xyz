export default class SocialLink {
    type: string;
    username: string;
    link: string;
    color: string;

    constructor(input: {
        type: string;
        username: string;
        link: string;
        color?: string;
    }) {
        this.type = input.type;
        this.username = input.username;
        this.link = input.link;
        this.color = input.color ?? "";
    }
}
