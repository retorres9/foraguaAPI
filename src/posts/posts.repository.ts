import { EntityRepository, Repository } from "typeorm";
import { Posts } from './posts.entity';
import { CreatePosts } from './dto/create-post.dto';

@EntityRepository(Posts)
export class PostsRepository extends Repository<Posts> {
    async getAllPosts(): Promise<Posts[]> {
        const query = this.createQueryBuilder('posts');
        query.andWhere('posts.isUp = true');
        const posts = await query.getMany();
        return posts;
    }

    async getLatestsPosts(): Promise<Posts[]> {
        const query = this.createQueryBuilder('posts');
        query.andWhere('posts.isUp = true');
        query.limit(3);
        const posts = await query.getMany();
        return posts;

    }

    async createPost(createPosts: CreatePosts): Promise<Posts> {
        const {title, body, img} = createPosts;
        const post = new Posts();
        post.title = title;
        post.body = body;
        post.img = img;
        post.created_at = new Date();
        post.updated_at = new Date();
        await post.save();
        return post;
    }
}