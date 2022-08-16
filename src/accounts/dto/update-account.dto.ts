import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-account.dto';
import { IsDateString } from 'class-validator';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
  @IsDateString()
  readonly updated_at: Date;
}
