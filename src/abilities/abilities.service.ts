import { Injectable } from '@nestjs/common';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AbilitiesService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createAbilityDto: CreateAbilityDto) {
    return await this.prisma.abilities.create({
      data: {
        ...createAbilityDto
      }
    });
  }

  async findAll() {
    return await this.prisma.abilities.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.abilities.findUnique({where:{
      id: id
    }});
  }

  async update(id: number, data: UpdateAbilityDto) {
    return await this.prisma.abilities.update({
      where: {
        id: id
      },
      data
    });
  }

   async remove(id: number) {
    return await this.prisma.abilities.delete({where: {
      id: id
    }});
  }
}
