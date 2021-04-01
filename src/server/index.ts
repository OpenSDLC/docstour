import express, { Request, Response, NextFunction } from 'express';
import { Error } from './types';
import os from 'os';
import cors from 'cors';
// import path from 'path';
import apiRouter from './routes/api';

const app = express();
const PORT = '3000';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('dist'));
app.use(cors())
app.use('/api', apiRouter);

app.get('/api/getUsername', (req: Request, res: Response) => res.send({ username: os.userInfo().username }));

app.get('/', (req: Request, res: Response) => {
  console.log('express is running;');
});

// 400 error
app.get('/', (req: Request, res: Response) => {
  res.status(400).send('Status 400: Something broke')
});

// 500 error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send('Status 500: Something broke');
});

app.listen(PORT || 3000, () => console.log(`Listening on port ${PORT || 3000}!`));