import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/guards/jwt-auth-guard";
import { PermissionsGuard } from "src/guards/permissions.guard";
import { SetMetadata } from "@nestjs/common";

@Controller('protected')
export class ProtectedController {
    @Get('admin')
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    @SetMetadata('permissions', ['admin'])
    getAdminContent() {
        return 'This content is only for admins'
    }

    @Get('user')
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    @SetMetadata('permissions', ['user'])
    getUserContent() {
        return 'this content is only for users'
    }
}