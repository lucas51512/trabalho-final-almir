import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    nameUser:string
    
    @IsEmail()
    @IsNotEmpty()
    emailUser: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}