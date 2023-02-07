import { DeleteResult } from 'typeorm';
import { AppDataSource } from '../config/database.config';
import { CardHolder } from '../entities/card-holder.entity';
import { Card } from '../entities/card.entity';

export default class CardHolderService {
    cardHolderRepository = AppDataSource.getRepository(CardHolder);

    async create(cardHolderData: CardHolder): Promise<CardHolder> {
        const cardHolder = this.cardHolderRepository.create(cardHolderData);
        await this.cardHolderRepository.save(cardHolder);
        return cardHolder;
    }

    async findAll(): Promise<CardHolder[]> {
        return this.cardHolderRepository.find({
            relations: ['card'],
        });
    }

    async findOne(id: number): Promise<CardHolder | null> {
        return this.cardHolderRepository.findOneBy({ id });
    }

    async update(
        id: number,
        cardHolderData: CardHolder
    ): Promise<CardHolder | null> {
        const cardHolder = await this.findOne(id);
        if (!cardHolder) {
            return null;
        }
        this.cardHolderRepository.merge(cardHolder, cardHolderData);
        await this.cardHolderRepository.save(cardHolder);
        return cardHolder;
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.cardHolderRepository.delete(id);
    }
}
