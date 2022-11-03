import { Module } from '@nestjs/common';
import { PokemonAbilitiesService } from './pokemon-abilities.service';
import { PokemonAbilitiesController } from './pokemon-abilities.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PokemonAbilitiesController],
  providers: [PokemonAbilitiesService, PrismaService]
})
export class PokemonAbilitiesModule {}
