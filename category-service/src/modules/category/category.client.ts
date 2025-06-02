import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class CategoryClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3001,
        host: 'localhost',
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  getAllCategory() {
    const data = this.client.send('get_all_categories', '');
    return data;
  }

  createCategory(payload: any) {
    const data = this.client.send('create_category', payload);
    return data;
  }
}
