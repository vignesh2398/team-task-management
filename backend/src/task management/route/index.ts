import express, { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from '../controller/task.controller';
import { validateBody } from '../../utils/zodValidate';
import { requireDeleteHeader } from '../../utils/headerValidation';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks =  getAllTasks();
    res.json({ tasks });
  } catch (err) {
    next(err);
  }
});

// GET /tasks/:id - Get a specific task
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId: string = req.params.id as string;
    const task = getTaskById(taskId);
    res.json({ task });
  } catch (err) {
    next(err);
  }
});

// POST /tasks - Create a new task
router.post('/', validateBody(z.object({
  title: z.string(),
  description: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  status: z.enum(["todo", "in-progress", "done"])
})), (req: Request, res: Response, next: NextFunction) => {
  try {
    const newTask = createTask(req.body);
    res.status(201).json({ task: newTask });
  } catch (err) {
    next(err);
  }
});

// PUT /tasks/:id - Update a task
router.put('/:id',validateBody(z.object({
  title: z.string(),
  description: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  status: z.enum(["todo", "in-progress", "done"])
})), (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId: string = req.params.id as string;
    const updatedTask = updateTask(taskId, req.body);
    res.json({ message: `Update task ${taskId}`, task: updatedTask });
  } catch (err) {
    next(err);
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', requireDeleteHeader, (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId: string = req.params.id as string;
    deleteTask(taskId);
     res.status(200).json({ message: `Deleted task ${taskId}` });
  } catch (err) {
    next(err);
  }
});

export default router;