import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonAbilitiesService } from './pokemon-abilities.service';
import { CreatePokemonAbilityDto } from './dto/create-pokemon-ability.dto';
import { UpdatePokemonAbilityDto } from './dto/update-pokemon-ability.dto';

@Controller('pokemon-abilities')
export class PokemonAbilitiesController {
  constructor(private readonly pokemonAbilitiesService: PokemonAbilitiesService) {}

  @Post()
  create(@Body() createPokemonAbilityDto: CreatePokemonAbilityDto) {
    return this.pokemonAbilitiesService.create(createPokemonAbilityDto);
  }

  @Get()
  findAll() {
    return this.pokemonAbilitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonAbilitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonAbilityDto: UpdatePokemonAbilityDto) {
    return this.pokemonAbilitiesService.update(+id, updatePokemonAbilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonAbilitiesService.remove(+id);
  }
}
