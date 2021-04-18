import { Injectable } from '@nestjs/common';
import { UserRespository } from './user.repository';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private userRespository: UserRespository) {
        
    }

    signup(createUserDto: CreateUserDto): Promise<User> {
        return this.userRespository.signup(createUserDto);
    }
}
