import { Module } from '@nestjs/common';
import { CategoryModule } from './services';
import { ProductModule } from './services/product/product.module';
import { UserModule } from './services/user/user.module';

@Module({
  imports: [CategoryModule,ProductModule,UserModule],
})
export class AppModule {}
