import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';
import { User } from "src/entities/user.entity";

@Injectable()
export class PermissionsGuard implements CanActivate{
    constructor(
        private reflector: Reflector,
        private jwtService: JwtService,
    ){}


   async canActivate(context: ExecutionContext): Promise <boolean> {
        //Obtenemos permisos
        const requiredPermissions = this.reflector.getAllAndOverride<string[]>('permission',[
            context.getHandler(),
            context.getClass(),
        ]);

        if(!requiredPermissions){
            return true; //Sin permisos especificos permite el acceso
        }
        const request: Request = context.switchToHttp().getRequest();
        const user = this.validateToken(request);

        if(!user){
             throw new ForbiddenException('Invalid token');
        }

        const hasPermission = requiredPermissions.every(permission =>
            user.permission.includes(permission),
        );

        if(!hasPermission){
            throw new ForbiddenException('You do not have permission for this route!');
        }
        return true;
    }

    private validateToken(request: Request): User{
        const token = request.headers.authorization?.split(' ')[1];
        if(!token){
            throw new ForbiddenException('No token provided')
        }
        try{
            const user = this.jwtService.verify(token);
            return user;
        }catch(err){
            throw new ForbiddenException('Invalid token')
        }
    }
        
  }


