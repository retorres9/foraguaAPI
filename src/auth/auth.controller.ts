import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        
    }

    @Post('/signup')
    signup(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.authService.signup(createUserDto);
    }

    @Post('login')
    login(@Body() authUserDto: AuthUserDto): Promise<User> {
        return this.authService.login(authUserDto);
    }
}
