import { Request, Response } from 'express';
import { CardService } from '../services/card.service';

const cardService = new CardService();

export class CardController {
    async create(req: Request, res: Response) {
        const { rfid, label } = req.body;
        const card = await cardService.create({ rfid, label });
        res.status(201).send(card);
    }

    async getAll(req: Request, res: Response) {
        const cards = await cardService.getAll();
        res.send(cards);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { rfid, label } = req.body;
        const updateResult = (await cardService.update(parseInt(id), {
            rfid,
            label,
        })) as any;
        if (!updateResult || !updateResult.affected) {
            res.status(404).send();
            return;
        }
        res.status(204).send();
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const deleteResult = (await cardService.delete(parseInt(id))) as any;
        if (!deleteResult || !deleteResult.affected) {
            res.status(404).send();
            return;
        }
        res.status(204).send();
    }
}
