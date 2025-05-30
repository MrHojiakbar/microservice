import { Injectable } from '@nestjs/common';
import { CategoryClient } from './category.client';

@Injectable()
export class CategoryService {
  constructor(private client: CategoryClient) {}

  getAll() {
    return this.client.getAllCategory();
  }

  create(payload: any) {
    return this.client.createCategory(payload);
  }
}
