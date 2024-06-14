// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from '../data-source';
import { UserModule } from './user/user.module';
import { DocsModule } from './docs/docs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options),
    UserModule,
    DocsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
