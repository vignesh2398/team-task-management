import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

// Example task routes
// GET /tasks - Get all tasks
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: Implement get all tasks logic
    res.json({ message: 'Get all tasks' });
  } catch (err) {
    next(err);
  }
});

// GET /tasks/:id - Get a specific task
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId: string = req.params.id as string;
    // TODO: Implement get task by id logic
    res.json({ message: `Get task ${taskId}` });
  } catch (err) {
    next(err);
  }
});

// POST /tasks - Create a new task
router.post('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: Implement create task logic
    res.json({ message: 'Create new task' });
  } catch (err) {
    next(err);
  }
});

// PUT /tasks/:id - Update a task
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId: string = req.params.id as string;
    // TODO: Implement update task logic
    res.json({ message: `Update task ${taskId}` });
  } catch (err) {
    next(err);
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId: string = req.params.id as string;
    // TODO: Implement delete task logic
    res.json({ message: `Delete task ${taskId}` });
  } catch (err) {
    next(err);
  }
});

export default router;