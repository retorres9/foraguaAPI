import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { TYPEORMCONFIG } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot(TYPEORMCONFIG),
    AuthModule
  ],
})
export class AppModule {}
