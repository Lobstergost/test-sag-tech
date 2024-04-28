import { Module } from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {AuthService} from './auth.service';
import {UsersService} from './users.service';
import {PostsService} from './posts.service';


@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, AuthService, UsersService, PostsService],
})
export class AppModule {}
