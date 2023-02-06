import { AppDataSource } from '../config/database.config';
import { Card } from '../entities/card.entity';

// const CardRepo =
// console.log(CardRepo);

export class CardService {
    cardRepo = AppDataSource.getRepository(Card);

    async getAll(): Promise<Card[]> {
        return await this.cardRepo.find();
    }

    async create(): Promise<Card> {
        const card = new Card();
        card.rfid = Math.random().toString();
        card.label = 'My card ' + Math.random();
        return await this.cardRepo.save(card);
    }
}
