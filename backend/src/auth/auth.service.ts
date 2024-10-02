import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import * as bcrypt from 'bcrypt'
import { UsersService } from 'src/users/users.service';




@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService, //Para JWT
        private readonly usersService: UsersService,  //Para Usuarios
    
    ) { }



    async validateUser(username: string, pass: string): Promise<any>{
        const user = await this.usersService.findOne(username);
        if(user && await bcrypt.compare(pass, user.password)){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }


    //Genero el JWT despues de que el login funciono

    async login(user: any) {
        const payload = { username: user.username, sub: user.id, permission: user.permission };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
