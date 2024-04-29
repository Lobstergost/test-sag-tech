import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './post.dto';

@Injectable()
export class PostService {
    findAll() {
    }

    findOne(id: number){
    }

    create(createPostDto: CreatePostDto) {
    }

    update(id: number, updatePostDto: UpdatePostDto){
    }

    remove(id: number) {
    }
}
