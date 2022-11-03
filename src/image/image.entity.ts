import { Prisma } from "@prisma/client";

export class Image implements Prisma.ImagesUncheckedCreateInput {
    id?: number;
    pokemonId: number;
    url: string;
}
