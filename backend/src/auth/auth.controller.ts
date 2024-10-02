import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';







@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) { }





    @Post('register')
    async register(@Body() CreateUserDto: CreateUserDto) {
        return this.usersService.register(CreateUserDto);
    }



    @Post('login')
    async login(@Body() body: { username: string, password: string}) {
        //Valida el Usuario
        const user = await this.authService.validateUser(body.username, body.password);
        if (!user) {
            return { message: 'Please Check Your Credentials' }; //Error para credenciales incorrectas
        }

        //Usuario valido, genera JWT

        return this.authService.login(user);
    }


}
