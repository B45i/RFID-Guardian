import { DeleteResult, UpdateResult } from 'typeorm';
import { AppDataSource } from '../config/database.config';
import { Card } from '../entities/card.entity';

type CardData = { rfid: string; label: string };

export class CardService {
    cardRepository = AppDataSource.getRepository(Card);

    async create(data: CardData): Promise<Card> {
        const card = this.cardRepository.create(data);
        await this.cardRepository.save(card);
        return card;
    }

    async getAll(): Promise<Card[]> {
        return this.cardRepository.find();
    }

    async findOne(id: number): Promise<Card | null> {
        return this.cardRepository.findOneBy({ id });
    }

    async update(id: number, data: CardData): Promise<Card | null> {
        const card = await this.findOne(id);
        if (!card) {
            return null;
        }

        this.cardRepository.merge(card, data);
        await this.cardRepository.save(card);
        return card;
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.cardRepository.delete(id);
    }
}
