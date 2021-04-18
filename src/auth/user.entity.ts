import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, unique: true})
    username: string;

    @Column({nullable: false, unique: true})
    email: string;

    @Column({nullable: false})
    password: string;

}