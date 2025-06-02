import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryClient } from './category.client';
import { CategoryController } from './category.controller';
import { ProductClient } from '../product/product.client';

@Module({
  providers: [CategoryService, CategoryClient,ProductClient],
  controllers: [CategoryController],
})
export class CategoryModule {}
