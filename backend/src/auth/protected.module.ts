import { Module } from "@nestjs/common";
import { AuthModule } from "./auth.module";
import { JwtModule } from "@nestjs/jwt";
import { PermissionsGuard } from "src/guards/permissions.guard";
import { JwtStrategy } from "./protected.service";
import { ProtectedController } from "./protected.controller";

@Module({
    imports:[
        AuthModule,
        JwtModule.register({
            secret:'1E$tuard0',
            signOptions:{expiresIn: '1h'},
        }),
    ],
    controllers: [ProtectedController],
    providers: [JwtStrategy, PermissionsGuard],
})

export class ProtectedModule {}