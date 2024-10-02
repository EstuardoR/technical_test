import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from './user.entity';
import { ModuleEntity } from './module.entity';

@Entity('permission')
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => ModuleEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'module_id' })
    module: ModuleEntity;

    @Column({ default: false })
    can_create: boolean;

    @Column({ default: false })
    can_read: boolean;

    @Column({ default: false })
    can_update: boolean;

    @Column({ default: false })
    can_delete: boolean;






}
