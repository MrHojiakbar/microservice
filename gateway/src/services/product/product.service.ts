import { Injectable } from '@nestjs/common';
import { ProductClient } from './product.client';

@Injectable()
export class ProductService {
  constructor(private client: ProductClient) {}

  getAll() {
    return this.client.getAllProduct();
  }
  getByCatgory(id:string){
    return this.client.getProduct(id)
  }

  create(payload: any) {
    return this.client.createProduct(payload);
  }

  update(id:number,payload:any){
    return this.client.updateProduct(id,payload)
  }
  delete(id:number){
    return this.client.deleteProduct(id)
  }
}
