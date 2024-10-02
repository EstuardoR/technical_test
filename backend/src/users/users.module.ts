import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    controllers:[UsersController],
    exports: [UsersService]
})
export class UsersModule {}
