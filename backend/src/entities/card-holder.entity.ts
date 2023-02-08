import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { Card } from './card.entity';

@Entity()
export class CardHolder {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Card, {
        onDelete: 'SET NULL',
    })
    @JoinColumn({ name: 'cardId' })
    card: Card;

    @Column({ length: 255 })
    fullName: string;

    @Column({ length: 255 })
    email: string;

    @Column({ type: 'timestamptz', nullable: true })
    lastLogin: Date;

    @Column({ type: 'timestamptz', nullable: true })
    lastLogout: Date;

    @Column({ length: 255, nullable: true })
    department: string;

    @Column({ type: 'boolean', default: false })
    isLoggedIn: boolean;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
