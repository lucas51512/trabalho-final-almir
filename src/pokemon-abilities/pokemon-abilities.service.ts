import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonAbilityDto } from './dto/create-pokemon-ability.dto';
import { UpdatePokemonAbilityDto } from './dto/update-pokemon-ability.dto';

@Injectable()
export class PokemonAbilitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPokemonAbilityDto: CreatePokemonAbilityDto) {
    return await this.prisma.pokemon_Abilities.create({
      data: {
        ...createPokemonAbilityDto
      }
    });
  }

  async findAll() {
    return await this.prisma.pokemon_Abilities.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.pokemon_Abilities.findUnique({where: {
      pokemonAbilityId: id
    }});
  }

  async update(id: number, data: UpdatePokemonAbilityDto) {
    return await this.prisma.pokemon_Abilities.update({where:{
      pokemonAbilityId: id
    },
    data
  });
  }

  async remove(id: number) {
    return await this.prisma.pokemon_Abilities.delete({where: {
      pokemonAbilityId: id
    }});
  }
}
