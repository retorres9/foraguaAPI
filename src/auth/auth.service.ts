import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRespository } from './user.repository';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
    constructor(private userRespository: UserRespository) {
        
    }

    signup(createUserDto: CreateUserDto): Promise<User> {
        return this.userRespository.signup(createUserDto);
    }

    async login(authUserDto: AuthUserDto): Promise<User> {
        console.log(authUserDto.username);
        
        const user = await this.userRespository.validateUserPassword(authUserDto);
        console.log(user);
        
        if (!user) {
            throw new NotFoundException({message: `Usuario no encontrado`});
        }
        return user;

    }
}
