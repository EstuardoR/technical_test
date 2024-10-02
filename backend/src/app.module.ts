import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { User } from './entities/user.entity';
import { ModuleEntity } from './entities/module.entity';
import { Permission } from './entities/permission.entity';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProtectedModule } from './auth/protected.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2701imDev*',
      database: 'Tecnica',
      entities: [User, ModuleEntity, Permission],
      synchronize: false,
    }),

    TypeOrmModule.forFeature([User, ModuleEntity, Permission]),

    AuthModule,

    UsersModule,
    
    ProtectedModule,

  

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
