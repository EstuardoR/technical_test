import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({ length: 50 })
    username: string;

    @Column()
    password: string;

    @Column({ length: 100 })
    email: string;
   
    @Column('json', {nullable:true})
    permission: string[];
}