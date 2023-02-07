import { Router } from 'express';
import { CardController } from '../controllers/card.controller';
import { CardService } from '../services/card.service';

const cardRouter = Router();

const cardController = new CardController();

cardRouter.get('/', cardController.findAll);
cardRouter.get('/empty', cardController.findAllEmpty);
cardRouter.post('/', cardController.create);
cardRouter.put('/:id', cardController.update);
cardRouter.delete('/:id', cardController.delete);

export default cardRouter;
