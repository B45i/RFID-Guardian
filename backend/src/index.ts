import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { AppDataSource } from './config/database.config';
import cardRouter from './routes/card.routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

(async () => {
    try {
        await AppDataSource.initialize();

        app.use('/cards', cardRouter);

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.listen(port, () => {
            console.log(`App listening at ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
})();
