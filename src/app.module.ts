import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AccountsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AccountsModule],
})
export class AppModule {}
