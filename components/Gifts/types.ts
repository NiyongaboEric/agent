import { StaticImageData } from "next/image";

export interface Igift {
    name: string;
    image: string | StaticImageData;
}

export type gift = Igift[];
