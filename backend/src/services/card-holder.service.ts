import { DeleteResult } from 'typeorm';
import { AppDataSource } from '../config/database.config';
import { CardHolder } from '../entities/card-holder.entity';
import { Card } from '../entities/card.entity';
import { CardService } from './card.service';

export default class CardHolderService {
    cardHolderRepository = AppDataSource.getRepository(CardHolder);
    cardService = new CardService();

    async create(cardHolderData: CardHolder): Promise<CardHolder> {
        const cardHolder = this.cardHolderRepository.create(cardHolderData);
        await this.cardHolderRepository.save(cardHolder);
        return cardHolder;
    }

    async checkIn(rfid: string): Promise<string> {
        const card = await this.cardService.findCardByRFID(rfid);

        if (!card) {
            await this.cardService.create({
                rfid,
                label: 'Newly tapped card',
            });
            return `New card with RFID: ${rfid}`;
        }

        const cardHolder = await this.findOneByCard(card.id);

        if (!cardHolder) {
            return `Card ${rfid} is not associated with any user`;
        }

        cardHolder.isLoggedIn = !cardHolder.isLoggedIn;
        cardHolder.isLoggedIn
            ? (cardHolder.lastLogin = new Date())
            : (cardHolder.lastLogout = new Date());
        await this.cardHolderRepository.save(cardHolder);

        return `${cardHolder.fullName} ${
            cardHolder.isLoggedIn ? 'Logged in' : 'Logged out'
        }`;
    }

    async findAll(): Promise<CardHolder[]> {
        return this.cardHolderRepository.find({
            relations: ['card'],
        });
    }

    async findOne(id: number): Promise<CardHolder | null> {
        return this.cardHolderRepository.findOneBy({ id });
    }

    async findOneByCard(cardId: number) {
        return this.cardHolderRepository.findOneBy({ card: { id: cardId } });
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
