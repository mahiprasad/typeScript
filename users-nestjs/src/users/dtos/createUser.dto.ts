import {IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
  
  @IsNotEmpty()
  review: string;
}