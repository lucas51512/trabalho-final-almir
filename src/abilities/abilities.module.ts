import { Module } from '@nestjs/common';
import { AbilitiesService } from './abilities.service';
import { AbilitiesController } from './abilities.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AbilitiesController],
  providers: [AbilitiesService, PrismaService]
})
export class AbilitiesModule {}
