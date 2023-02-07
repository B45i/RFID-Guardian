import { NextFunction, Request, Response } from 'express';
import CardHolderService from '../services/card-holder.service';
import { HttpError } from '../types/http-error.type';

const cardHolderService = new CardHolderService();

export default class CardHolderController {
    async create(req: Request, res: Response, next: NextFunction) {
        const cardHolderData = req.body;
        try {
            const cardHolder = await cardHolderService.create(cardHolderData);
            res.status(201).send(cardHolder);
        } catch (error) {
            next(new HttpError());
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const cardHolders = await cardHolderService.findAll();
            res.send(cardHolders);
        } catch (error) {
            next(new HttpError());
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const cardHolderData = req.body;

        try {
            const cardHolder = await cardHolderService.update(
                parseInt(id),
                cardHolderData
            );

            if (!cardHolder) {
                next(new HttpError('Card holder not found', 404));
            }

            res.send(cardHolder);
        } catch (error) {
            next(new HttpError());
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            const result = await cardHolderService.delete(parseInt(id));
            if (!result || !result.affected) {
                next(new HttpError('Card holder not found', 404));
                return;
            }
            res.status(204).send();
        } catch (error) {
            next(new HttpError());
        }
    }
}
