import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonAbilityDto } from './create-pokemon-ability.dto';

export class UpdatePokemonAbilityDto extends PartialType(CreatePokemonAbilityDto) {}
