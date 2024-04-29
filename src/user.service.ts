import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
    findAll() {
    }

    findOne(id: number) {
    }

    update(id: number, updateUserDto: UpdateUserDto) {
    }

    remove(id: number) {
        }
}
