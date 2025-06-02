import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models';
import { where } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
    });

    return {
      data: user,
    };
  }

  async findAll() {
    const users = await this.userModel.findAll();
    return {
      count: users.length,
      data: users,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.update(
      { name: updateUserDto.name, email: updateUserDto.email },
      { where: { id } },
    );
  }

  async remove(id: number | string) {
    let userId = Number(id)
    await this.userModel.destroy({ where: { id: userId } });
    return {
      message: 'ochirildi',
    };
  }
}
