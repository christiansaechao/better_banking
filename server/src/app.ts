import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(router);
app.get('/', (req, res) => {
    res.send('Hello World!');
})

export default app;