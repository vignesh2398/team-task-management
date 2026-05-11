import { tasks } from "../../data/tasks";
import type { Task } from "../../types/task.types";

export const createTasks = (taskData: Omit<Task, 'id'>) => {
  try {
    const newTask: Task = {
      id: Date.now().toString(),
      ...taskData,
    };
    tasks.push(newTask);
    return newTask;
  } catch (error) {
    throw new Error("Failed to create task");
  }
};

export const updateTasks = (taskId: string, data: Partial<Omit<Task, 'id'>>) => {
    try {
        const taskIndex = tasks.findIndex((t) => t.id === taskId);
        if (taskIndex === -1) {
            console.error("Task not found for ID:", taskId);
            throw new Error("Task not found");
        }
        tasks[taskIndex] = { ...tasks[taskIndex], ...data };
        return tasks[taskIndex];
    } catch (error) {
        throw new Error("Failed to update task");
    }
};

export const deleteTasks = (taskId: string) => {
  try {
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) {
      throw new Error("Task not found");
    }
    const [deletedTask] = tasks.splice(taskIndex, 1);
    return deletedTask;
  } catch (error) {
    throw new Error("Failed to delete task");
  }
};

