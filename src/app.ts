import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';
import { handleErrors } from './middlewares';
import { carsRouter } from './routers';

export const app = express();

app.use(helmet());
app.use(express.json());
app.use('/cars', carsRouter);
app.use(handleErrors);
