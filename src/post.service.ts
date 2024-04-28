import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './post.dto';

@Injectable()
export class PostService {
    findAll(): Promise<any[]> {
    }

    findOne(id: number): Promise<any> {
    }

    create(createPostDto: CreatePostDto): Promise<any> {
    }

    update(id: number, updatePostDto: UpdatePostDto): Promise<any> {
    }

    remove(id: number): Promise<any> {
    }
}
