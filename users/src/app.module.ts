import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';



@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: "ijoh_2010",
    database: "fullstack",
    autoLoadModels: true,
    sync: {
      alter: true,
    
    }
  }), UsersModule],

})
export class AppModule { }
