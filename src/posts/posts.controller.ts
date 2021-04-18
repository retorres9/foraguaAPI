import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './posts.entity';
import { CreatePosts } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get()
    getAllPosts(): Promise<Posts[]> {
        return this.postsService.getAllPosts();
    }

    @Get('latests')
    getLatestPosts(): Promise<Posts[]> {
        return this.postsService.getLatestsPosts();
    }

    @Post()
    createPost(@Body() createPost: CreatePosts): Promise<Posts> {
        return this.postsService.createTask(createPost);
    }
}
