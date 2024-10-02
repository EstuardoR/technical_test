import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('module')
export class ModuleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name_module: string;

}