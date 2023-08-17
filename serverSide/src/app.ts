import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { hostName, portNumber } from './config';
import 'express-async-errors';
import wordsRoutes from './routes/wordsRoutes';
import rankRoutes from './routes/rankRoutes';
import AppError from './utils/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/words', wordsRoutes);
app.use('/rank', rankRoutes);

// Global error handler
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  res.sendStatus(statusCode).send({
    status: statusCode,
    message: err?.message || 'Internal Server Error!',
    errors: err?.errors || [],
  });
});

app.listen(portNumber, hostName, () => {
  console.log(`Server is Running at ${hostName}:${portNumber}`);
});
