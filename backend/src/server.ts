import 'express-async-errors';
import express, { NextFunction, Request, Response } from "express";
import morgan from 'morgan';
import { routes } from './routes';

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.use(routes);

/**
 * middleware to handle errors messages 
 */
 app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
      return res.status(400).json({
          error: err.message
      })
  }
  return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error!'
  })
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});