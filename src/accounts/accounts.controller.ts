import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  Delete,
  Param,
} from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('api/v2/accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  //   @Get('me/:id?')
  //   findAll(@Param('id') id: string, @Headers() headers) {
  //     console.log(headers);
  //     return id
  //       ? this.accountsService.findOne(id)
  //       : this.accountsService.findAll();
  //   }
  @Get('me/:id?')
  findOne(@Param('id') id: string, @Headers() headers) {
    console.log(headers);
    return this.accountsService.findOne(id);
  }
  @Post('create')
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    this.accountsService.create(createAccountDto);
  }
  @Post('refresh_token')
  createRefreshToken(@Headers() headers) {
    return headers;
  }
  @Post('login')
  login(@Headers() headers) {
    return headers;
  }
  @Delete('logout/:id')
  logout(@Param('id') id: string, @Headers() headers) {
    return { id, headers };
  }
}
