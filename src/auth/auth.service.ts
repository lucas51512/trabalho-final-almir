import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService){}

  async signup(dto: AuthDto){

    try {
      const hash = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          nameUser:dto.nameUser,
          emailUser: dto.emailUser,
          hash,
        },
      });
  
      delete user.hash;
      return user;
      
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if(error.code === 'P2002')
        throw new ForbiddenException('Credenciais já cadastradas',);
        
      }
      throw error;
    }
  }

  async signin(dto: AuthDto){
    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        emailUser: dto.emailUser,
      },
    });

  // if user does not exist throw exception
  if(!user)
  throw new ForbiddenException('Credenciais incorretas',);
  const pwMatches = await argon.verify(user.hash, dto.password,);

  //if password incorrect throw exception
  if(!pwMatches)
  throw new ForbiddenException('Credenciais incorretas',);
  //send back the user
  delete user.hash;
  return user;
  }

}
