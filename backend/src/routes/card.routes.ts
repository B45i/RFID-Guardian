import { Router } from 'express';
import { CardController } from '../controllers/card.controller';
import { CardService } from '../services/card.service';

const cardRouter = Router();

const cardController = new CardController();

// get all cards
cardRouter.get('/', cardController.getAllCards);

export default cardRouter;
