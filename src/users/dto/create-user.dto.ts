import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString /* Matches */ } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User name',
    example: 'Thulio',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'email',
    example: 'Thuliopaiva@gmail.com',
  })
  email: string;

  // @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)
  // password: string; para quando for usar uma password com 1 ou mais letra maiuscula 1 ou mais simbolo 1 ou mais numero
}
