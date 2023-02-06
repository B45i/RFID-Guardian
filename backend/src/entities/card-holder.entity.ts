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

    @OneToOne(type => Card)
    @JoinColumn({ name: 'card_id' })
    card: Card;

    @Column({ length: 255 })
    full_name: string;

    @Column({ length: 255 })
    email: string;

    @Column({ type: 'timestamptz' })
    last_login: Date;

    @Column({ type: 'timestamptz' })
    last_logout: Date;

    @Column({ length: 255 })
    department: string;

    @Column({ type: 'boolean', default: false })
    is_logged_in: boolean;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
