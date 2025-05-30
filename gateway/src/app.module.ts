import { Module } from '@nestjs/common';
import { CategoryModule } from './services';

@Module({
  imports: [CategoryModule],
})
export class AppModule {}
