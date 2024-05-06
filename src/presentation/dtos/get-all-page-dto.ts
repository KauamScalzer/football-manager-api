import { IsNotEmpty } from 'class-validator';

export class GetAllPageDto {
  @IsNotEmpty()
  skip: number;

  @IsNotEmpty()
  take: number;

  search?: string;
}
