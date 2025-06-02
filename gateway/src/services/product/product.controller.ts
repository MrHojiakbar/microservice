import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() payload: string) {
    return this.service.create(payload);
  }
  @Put()
  update(@Param('id',ParseIntPipe) id:number,@Body() payload){
    return this.service.update(id,payload)
  }

  @Delete()
  @HttpCode(204)
  delete(@Param("id",ParseIntPipe) id:number){
    return this.service.delete(id)
  }
}
