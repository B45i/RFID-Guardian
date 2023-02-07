import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../types/http-error.type';

export const ErrorMiddleWare = (
    error: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({ message: error.message || 'An Unknown error has occurred' });
};
