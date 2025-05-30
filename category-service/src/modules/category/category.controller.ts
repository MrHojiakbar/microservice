import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class CategoryController {
  constructor(private service: CategoryService) {}

  @MessagePattern('get_all_categories')
  async getAll() {
    return await this.service.getAll();
  }

  @MessagePattern('create_category')
  async create(@Payload() data: any) {
    return await this.service.create(data.name);
  }
}
