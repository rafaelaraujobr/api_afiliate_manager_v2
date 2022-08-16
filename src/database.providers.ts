import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1230',
        database: 'db_affiliate_manager_v2',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
