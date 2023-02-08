import { Router } from 'express';
import CardHolderController from '../controllers/card-holder.controller';

const cardHoldersRouter = Router();
const cardHolderController = new CardHolderController();

cardHoldersRouter.get('/', cardHolderController.findAll);
cardHoldersRouter.post('/', cardHolderController.create);
cardHoldersRouter.post('/check-in', cardHolderController.checkIn);
cardHoldersRouter.put('/:id', cardHolderController.update);
cardHoldersRouter.delete('/:id', cardHolderController.delete);

export default cardHoldersRouter;
