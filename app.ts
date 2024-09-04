import express from 'express';
import cors from 'cors';
import guideRoutes from './routes/guide.routes';
import connectDB from './config/db.config';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', guideRoutes);

export default app;

