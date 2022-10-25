import { Pokemon_Abilities } from "@prisma/client";

export class CreateAbilityDto {
    id: number;
    name: string
    effect: string
    pokemon: Pokemon_Abilities
}
