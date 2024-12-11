export interface RouterLinkProp {
    name?: string;
    path?: string;
    params?: object;
}

export interface Link {
    text: string;
    link: string | RouterLinkProp;
    routerLink: boolean;
}

export interface LinkTypes {
    types: Array<"link" | "buttonLink">
}
