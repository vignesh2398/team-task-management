import { Request, Response, NextFunction } from "express";
const DELETE_TASK_HEADER = 'x-delete-task-auth';
const DELETE_TASK_TOKEN = 'task-delete-secret';

export const requireDeleteHeader = (req: Request, res: Response, next: NextFunction) => {
  const headerValue = req.header(DELETE_TASK_HEADER);
  if (headerValue !== DELETE_TASK_TOKEN) {
    return res.status(403).json({ error: 'Forbidden: missing or invalid delete authorization header' });
  }
  next();
};