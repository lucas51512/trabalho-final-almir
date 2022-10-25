import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUserDto {
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    idUser: number;

    @IsString()
    @IsNotEmpty()
    nameUser: string;
    
    @IsString()
    @IsNotEmpty()
    emailUser: string;

    @IsString()
    @IsNotEmpty()
    hash: string;
}
