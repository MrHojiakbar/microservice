import { InjectModel } from '@nestjs/mongoose';
import { Category } from './models';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async getAll() {
    const categories = await this.categoryModel.find();

    return {
      count: categories.length,
      data: categories,
    };
  }

  async create(name: string) {
    const category = await this.categoryModel.create({ name });

    return {
      message: 'yaratildi',
      data: category,
    };
  }
}
