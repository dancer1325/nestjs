import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mensaje {
    @PrimaryGeneratedColumn() // Primary key, generated automatically
    id: number;

    @Column()
    nick: string;

    @Column()
    mensaje: string;

    // @Column('text') // Specify the specific data in the database, since string isn't a type in the database
    // description: string;
    //
    // @Column('int') // Specify the specific data in the database, since string isn't a type in the database
    // views: number;
}
