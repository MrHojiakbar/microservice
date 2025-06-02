import { Injectable } from '@nestjs/common';
import { CategoryClient } from './category.client';
import { lastValueFrom } from 'rxjs';
import { ProductClient } from '../product/product.client';

@Injectable()
export class CategoryService {
  constructor(private client: CategoryClient,private productClient:ProductClient) {}

  async getAll() {
    const res:any[] = []
    
    const categories=await lastValueFrom(this.client.getAllCategory())
    console.log(categories.data);
    for (let c of categories.data){
      const product=(await lastValueFrom(this.productClient.getProduct(c._id))).data
      res.push({...c,product})
    }
    return {
      count:res.length,
      data:res
    };
  }

  async create(payload: any) {
    return this.client.createCategory(payload);
  }
}
