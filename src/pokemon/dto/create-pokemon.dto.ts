import { Prisma } from "@prisma/client";
import { IsString, IsInt, IsOptional, } from "class-validator";
export class CreatePokemonDto {
    @IsString()
    name: string;

    @IsInt()
    @IsOptional()
    heigth?: number | null;

    @IsOptional()
    images?: Prisma.ImagesUncheckedCreateNestedManyWithoutPokemonInput;

    price: number;
}
