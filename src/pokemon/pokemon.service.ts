import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createPokemonDto: CreatePokemonDto) {
    return await this.prisma.pokemon.create({
      data: createPokemonDto,
    });
  }

  async findAll() {
    return await this.prisma.pokemon.findMany();
  }

 async findOne(id: number) {
    return await this.prisma.pokemon.findUnique({
      where: {
        id
      }
    }); 
  }

  async update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return await this.prisma.pokemon.update({
      where: { id },
      data: updatePokemonDto 
    });
  }

  async remove(id: number) {
    return await this.prisma.pokemon.delete({
      where: {
        id
      }
    });
  }
}
