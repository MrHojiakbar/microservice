import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),ProductModule,PrismaService],
})
export class AppModule {}
