import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { AppDataSource } from './config/database.config';
import { ErrorMiddleWare } from './middlewares/error.middleware';
import cardHoldersRouter from './routes/card-holder.routes';
import cardRouter from './routes/card.routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

(async () => {
    try {
        await AppDataSource.initialize();

        app.use('/cards', cardRouter);
        app.use('/card-holders', cardHoldersRouter);

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.use(ErrorMiddleWare);

        app.listen(port, () => {
            console.log(`App listening at ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
})();
