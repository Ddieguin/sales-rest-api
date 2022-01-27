import {
    UpdateDateColumn,
    CreateDateColumn,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
} from 'typeorm';

import bcrypt from 'bcrypt';

@Entity('sales-users')
export class User {
    @PrimaryGeneratedColumn('uuid')
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

    @BeforeInsert()
    hashPassword() {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    @UpdateDateColumn()
    updated_at: Date;
}
