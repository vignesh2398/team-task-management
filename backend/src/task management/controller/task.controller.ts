import { tasks } from "../../data/tasks";
import { createTasks, updateTasks, deleteTasks } from "../module/task.module";
import type { Task } from "../../types/task.types";

export const getAllTasks =  () => {
try {
    return tasks;
    
} catch (error) {
   throw new Error("Failed to get tasks"); 
}
};

export const getTaskById = (id: String) => {
  try {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      throw new Error("Task not found");
    }
    return task;
    } catch (error) {
        throw new Error("Failed to get task by id");    
    }
};
// Create a new task
export const createTask = (taskData: Omit<Task, 'id'>) => {
    try {

        console.log("Creating task with data:", taskData);
        return createTasks(taskData);
    } catch (error) {
        throw new Error("Failed to create task");
    }
};

// Update a task
export const updateTask = (taskId: string, data:any) => {
    try {
        return updateTasks(taskId, data);
    } catch (error) {
        console.error("Error updating task:", error);
        throw new Error("Failed to update task");
    }   
};

// Delete a task
export const deleteTask = (taskId: string) => {
    try {
        return deleteTasks(taskId);
    } catch (error) {
        throw new Error("Failed to delete task");
    }
};
