import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @MessagePattern('create_user')
  async create(@Payload() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @MessagePattern('get_users')
  async findAll() {
    return await this.usersService.findAll();
  }

  @MessagePattern('update_user')
  update(@Payload('id') id: string, @Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @MessagePattern('delete_user')
  remove(@Payload('id') id: number | string) {
    return this.usersService.remove(id);
  }
}
