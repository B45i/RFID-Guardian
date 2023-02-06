import * as dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CardHolder } from '../entities/card-holder.entity';
import { Card } from '../entities/card.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Card, CardHolder],
    synchronize: true,
    logging: false,
});
