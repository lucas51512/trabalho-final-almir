import { Module } from '@nestjs/common';
import { PokemonTypesService } from './pokemon-types.service';
import { PokemonTypesController } from './pokemon-types.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PokemonTypesController],
  providers: [PokemonTypesService, PrismaService]
})
export class PokemonTypesModule {}
