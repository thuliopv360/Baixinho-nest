import { User } from './entities/users.entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: User[] = [];
  getAll() {
    return this.users;
  }
  create() {
    return 'Criação';
  }
}
