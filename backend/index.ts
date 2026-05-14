import express, { Request, Response, NextFunction } from 'express';
import taskRoutes from './src/task management/route/index';
import cors from 'cors';

const app = express();
const port: number = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req: Request, res: Response) => {
  res.send('Health check successful!');
});

app.use('/tasks', taskRoutes);
console.log('Task routes registeredsdf');
console.log('Task routes registeredsdf');
console.log('Task routes registeredsdf');
console.log('Task routes registeredsdf');
console.log('Task routes registeredsdf');
console.log('Task routes registeredsdf');
// 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

if (process.env.NODE_ENV !== 'test') {
 
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;