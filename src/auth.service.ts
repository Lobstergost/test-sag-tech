import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    async generateToken(user: any): Promise<string> {
        const payload = { username: user.username, sub: user.userId };
        return this.jwtService.sign(payload);
    }
}
export class AuthService {
    register(registerDto: RegisterDto): Promise<string> {
        }

    login(loginDto: LoginDto): Promise<any> {
        }
}
