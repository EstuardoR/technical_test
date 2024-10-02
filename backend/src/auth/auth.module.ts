import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import {UsersModule} from '../users/users.module'
import { AuthController } from './auth.controller';
import { ProtectedModule } from './protected.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: '1E$tuard0', //Clave
      signOptions: {expiresIn: '1h'}, //Expiracion de Token en 1 hora
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
