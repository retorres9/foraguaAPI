import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: 'mediumtext'})
    body: string;

    @Column({default: ''})
    img: string;

    @Column({default: true})
    isUp: boolean;

    @Column()
    created_at: Date

    @Column()
    updated_at: Date
}
