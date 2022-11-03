import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { AuthModule } from './auth/auth.module';
import { InsigniasModule } from './insignias/insignias.module';
import { PokemonTypesModule } from './pokemon-types/pokemon-types.module';
import { TypesModule } from './types/types.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { PokemonAbilitiesModule } from './pokemon-abilities/pokemon-abilities.module';
import { PrismaModule } from './prisma/prisma.module';
import { SuppliesModule } from './supplies/supplies.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PokemonModule, AuthModule, InsigniasModule, PokemonTypesModule, TypesModule, AbilitiesModule, PokemonAbilitiesModule, PrismaModule, SuppliesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
