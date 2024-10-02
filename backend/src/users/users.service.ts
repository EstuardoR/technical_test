import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UsersService {

        constructor(
           @InjectRepository(User)
            private userRepository: Repository<User>,
        ) {}

        async findOne(username: string): Promise<User | undefined> {
            return await this.userRepository.findOne({where: {username}});
        }

        //Registro
        async register(userDto: CreateUserDto){
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(userDto.password, salt);



             //Guardar los usuarios
             const newUser = {
                ...userDto,
                password: hashedPassword,
                permission: userDto.permission,
            };

            return await this.userRepository.save(newUser);
        }
}
