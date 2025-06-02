import { Controller} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('create_product')
  async create(@Payload() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @MessagePattern('get_all_product')
  async findAll() {
    return await this.productService.findAll();
  }

  @MessagePattern('get_product')
  async findOne(@Payload('id') id: string) {
    return await this.productService.findOne(+id);
  }
  @MessagePattern('get_product_ct')
  async findCt(@Payload('id') id: string) {
    return await this.productService.findByCt(id);
  }

  @MessagePattern('update_product')
  async update(@Payload('id') id: string, @Payload() updateProductDto: UpdateProductDto) {
    return await this.productService.update(+id, updateProductDto);
  }

  @MessagePattern('delete_product')
  async remove(@Payload('id') id: string) {
    return await this.productService.remove(+id);
  }
}
