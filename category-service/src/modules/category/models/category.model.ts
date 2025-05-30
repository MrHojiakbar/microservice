import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

@Schema({ collection: 'categories', timestamps: true, versionKey: false })
export class Category {
  @Prop({ type: SchemaTypes.String, unique: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
