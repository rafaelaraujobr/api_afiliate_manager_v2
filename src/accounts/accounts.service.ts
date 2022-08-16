import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  private accounts: Account[] = [
    {
      id: '1',
      first_name: 'John',
      last_name: 'Doe',
      email: 'rafael@gmail.com',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];
  findAll(): Account[] {
    return this.accounts;
  }
  findOne(id: string): Account {
    const account = this.accounts.find((account: Account) => account.id === id);
    if (!account)
      throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
    return account;
  }
  create(createAccountDto: any) {
    this.accounts.push(createAccountDto);
    return createAccountDto;
  }
  update(id: string, updateAccountDto: any) {
    const account = this.findOne(id);
    account.first_name = updateAccountDto.first_name;
    account.last_name = updateAccountDto.last_name;
    account.email = updateAccountDto.email;
    account.password = updateAccountDto.password;
    account.updated_at = new Date();
  }
}
