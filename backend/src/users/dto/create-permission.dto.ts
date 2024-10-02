import { IsBoolean, IsInt } from "class-validator";

export class CreatePermissionDto{
    @IsInt()
    user_id: number;

    @IsInt()
    module_id: number;

    @IsBoolean()
    can_create: boolean;

    @IsBoolean()
    can_read: boolean;

    @IsBoolean()
    can_update: boolean;

    @IsBoolean()
    can_delete: boolean;


}