import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class ProductClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3002,
        host: 'localhost',
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  getAllProduct() {
    const data = this.client.send('get_all_products', '');
    return data;
  }
  getProduct(id: string) {

    const data = this.client.send('get_product_ct', { id });
    return data;
  }

  createProduct(payload: any) {
    const data = this.client.send('create_product', payload);
    return data;
  }
  updateProduct(id: number, payload: any) {
    const data = this.client.send('update_product', { id, data: payload });
    return data
  }
  deleteProduct(id: number) {
    this.client.send('delete_product',id)
  }
}
