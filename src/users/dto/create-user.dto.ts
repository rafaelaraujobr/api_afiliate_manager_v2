import { IsEmail, IsNotEmpty, IsOptional, Matches } from 'class-validator';
import { RegExHelper } from 'src/helpers/regex.helper';
export class CreateUserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @Matches(RegExHelper.phone)
  readonly phone?: string;

  @Matches(RegExHelper.password)
  readonly password: string;

  @IsOptional()
  avatar_url?: string;
}
