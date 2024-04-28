import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
    register(registerDto: RegisterDto): Promise<any> {
        }

    login(loginDto: LoginDto): Promise<any> {
        }
}
