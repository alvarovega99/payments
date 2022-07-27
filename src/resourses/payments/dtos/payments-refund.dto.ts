import { IsOptional, IsString } from 'class-validator';

export class CreateRefundDto {
  @IsString({ message: 'dto.IS_STRING' })
  xAmount: string;
  @IsString({ message: 'dto.IS_STRING' })
  @IsOptional()
  xCustom01: string;
  @IsString({ message: 'dto.IS_STRING' })
  refNum: string;
  @IsString({ message: 'dto.IS_STRING' })
  Description: string;
}
