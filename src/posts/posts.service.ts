import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';
import { Posts } from './posts.entity';
import { CreatePosts } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(private postsRepository: PostsRepository) {}

    getAllPosts(): Promise<Posts[]> {
        return this.postsRepository.getAllPosts();
    }

    getLatestsPosts(): Promise<Posts[]> {
        return this.postsRepository.getLatestsPosts();
    }

    getPost(id: number): Promise<Posts> {
        return this.postsRepository.getPost(id);
    }

    createTask(createPosts: CreatePosts): Promise<Posts> {
        return this.postsRepository.createPost(createPosts);
    }
}
