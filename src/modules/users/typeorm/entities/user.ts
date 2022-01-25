import {
    PrimaryColumn,
    UpdateDateColumn,
    CreateDateColumn,
    Entity,
    Column,
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    profile_picture: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
