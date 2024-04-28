import { Controller, Get, Post, Param, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './post.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Get()
    async findAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.postService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postService.update(id, updatePostDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('id') id: string) {
        return this.postService.remove(id);
    }
}
