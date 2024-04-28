import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
    findAll(): Promise<any[]> {
    }

    findOne(id: number): Promise<any> {
    }

    update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    }

    remove(id: number): Promise<any> {
        }
}
