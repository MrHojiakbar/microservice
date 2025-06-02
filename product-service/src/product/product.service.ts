import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor (private readonly prisma:PrismaService) { }
  async create(data: CreateProductDto) {
    const newProduct=await this.prisma.product.create({data})
    return {
      message:"success",
      data:newProduct
    }
  }

  async findAll() {
    const products=await this.prisma.product.findMany()
    return {
      message:"success",
      count :products.length,
      data:products
    }
  }

  async findOne(id: number) {
    const product=await this.prisma.product.findUnique({where:{id}})
    return {
      message:"success",
      data:product
    }
  }
  async findByCt(categoryId: string | null) {
  if (!categoryId) {
    return {
      message: "categoryId is required",
      data: []
    };
  }

  const products = await this.prisma.product.findMany({
    where: { categoryId: categoryId }
  });

  return {
    message: "success",
    count: products.length,
    data: products
  };
}


  async update(id: number, data: UpdateProductDto) {
    const updateProduct=await this.prisma.product.update({where:{id},data})
    return {
      message:'success',
      data:updateProduct
    }
  }

  async remove(id: number) {
    await this.prisma.product.delete({where:{id}})
  }
}
