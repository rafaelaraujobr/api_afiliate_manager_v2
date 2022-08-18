import { DataSource } from 'typeorm';
import { Preference } from './entities/preference.entity';
import { User } from './entities/user.entity';

export const UsersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'PREFERENCES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Preference),
    inject: ['DATA_SOURCE'],
  },
];
