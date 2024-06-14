// src/data-source.ts

import { Docs } from 'src/docs/entities/doc.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';


export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'password',
  database: 'postgres',
  entities: [User, Docs],
  migrations: ['dist/migrations/*.js'],
  synchronize: false, // Ensure this is false in production
});

export default dataSource;
