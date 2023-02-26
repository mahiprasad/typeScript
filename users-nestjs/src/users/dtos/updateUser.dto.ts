import {IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
  
  @IsNotEmpty()
  review: string;
}