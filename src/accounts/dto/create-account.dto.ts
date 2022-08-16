import { IsDateString, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  readonly first_name: string;

  @IsString()
  readonly last_name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsDateString()
  readonly created_at: Date;
}
