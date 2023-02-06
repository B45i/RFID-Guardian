import { Request, Response } from 'express';
import { CardService } from '../services/card.service';

const cardService = new CardService();

export class CardController {
    constructor() {}

    async createCard(request: Request, response: Response) {
        const createdCard = cardService.create();
        return response.send(createdCard);
    }

    async getAllCards(request: Request, response: Response) {
        const allCards = await cardService.getAll();
        return response.send(allCards);
    }
}
