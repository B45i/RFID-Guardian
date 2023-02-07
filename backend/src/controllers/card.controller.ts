import { NextFunction, Request, Response } from 'express';
import { CardService } from '../services/card.service';
import { HttpError } from '../types/http-error.type';

const cardService = new CardService();

export class CardController {
    async create(req: Request, res: Response, next: NextFunction) {
        const { rfid, label } = req.body;

        try {
            const card = await cardService.create({ rfid, label });
            res.status(201).send(card);
        } catch (error) {
            next(new HttpError());
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const cards = await cardService.findAll();
            res.send(cards);
        } catch (error) {
            next(new HttpError());
        }
    }

    async findAllEmpty(req: Request, res: Response, next: NextFunction) {
        try {
            const cards = await cardService.findEmpty();
            res.send(cards);
        } catch (error) {
            console.log(error);
            next(new HttpError());
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const { rfid, label } = req.body;

        try {
            const card = await cardService.update(parseInt(id), {
                rfid,
                label,
            });

            if (!card) {
                next(new HttpError('Card not found', 404));
            }

            res.send(card);
        } catch (error) {
            next(new HttpError());
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            const deleteResult = await cardService.delete(parseInt(id));

            if (!deleteResult || !deleteResult.affected) {
                next(new HttpError('Card not found', 404));
                return;
            }
            res.status(204).send();
        } catch (error) {
            next(new HttpError());
        }
    }
}
