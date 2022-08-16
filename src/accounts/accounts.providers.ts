import { DataSource } from 'typeorm';
import { Account } from './entities/account.entity';
export const AccountsProviders = [
  {
    provide: 'ACCOUNTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Account),
    inject: ['DATA_SOURCE'],
  },
];
