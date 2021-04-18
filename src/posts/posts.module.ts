import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    TypeOrmModule.forFeature([PostsRepository])
  ]
})
export class PostsModule {}
