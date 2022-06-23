import { UsersService } from './users.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  // @Post()
  // create() {
  //   return 'Create user';
  // }
}
