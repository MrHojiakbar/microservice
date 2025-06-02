import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ type: 'string', default: 'Tom' })
  name?: string;
  @ApiProperty({ type: 'string', default: 'tom@gmail.com' })
  email?: string;
}
