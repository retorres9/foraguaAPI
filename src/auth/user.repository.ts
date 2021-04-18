import { BadRequestException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from './user.entity';


@EntityRepository(User)
export class UserRespository extends  Repository<User> {
    async signup(createUserDto: CreateUserDto): Promise<User> {
        const {username, email, password} = createUserDto;
        const user = new User();
        user.username = username;
        user.email = email;
        user.password = password;
        try {
            await user.save();
            user.password = '';
            return user;
        } catch (error) {
            console.log(error);
            if (error.code === 'ER_NO_DEFAULT_FOR_FIELD') {
                throw new BadRequestException({message: 'Existen campos vacios en la petición'});
            } else if (error.code === 'ER_DATA_TOO_LONG') {
                throw new BadRequestException({message: 'Los campos exceden el límite de longitud'});
            }
            
        }
    }

}