import { Module } from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {PostService} from './post.service';
import {AuthController} from './auth.controller';
import {UserController} from './user.controller';
import {PostController} from './post.controller';


@Module({
  imports: [],
  controllers: [AuthController, UserController, PostController],
  providers: [PrismaService, AuthService, UserService, PostService],
})
export class AppModule {}
