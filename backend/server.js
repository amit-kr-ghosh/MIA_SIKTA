import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import admissionsRouter from './routes/admissions.js';
import noticesRouter from './routes/notices.js';
import contactsRouter from './routes/contact.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
  });
});

app.use('/api', admissionsRouter);
app.use('/api', noticesRouter);
app.use('/api', contactsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message,
  });
});

export default app;
