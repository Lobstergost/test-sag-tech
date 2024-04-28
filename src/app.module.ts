import { Module } from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {PostService} from './post.service';


@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, AuthService, UserService, PostService],
})
export class AppModule {}
