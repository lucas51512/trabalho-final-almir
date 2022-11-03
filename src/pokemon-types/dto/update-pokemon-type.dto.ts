import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonTypeDto } from './create-pokemon-type.dto';

export class UpdatePokemonTypeDto extends PartialType(CreatePokemonTypeDto) {}
