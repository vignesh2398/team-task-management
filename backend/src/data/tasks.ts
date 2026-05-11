import type { Task } from "../types/task.types";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Setup backend",
    description: "Initialize Express server",
    priority: "high",
    status: "in-progress",
  },
  {
    id: "2",
    title: "Build frontend",
    description: "Create React dashboard",
    priority: "medium",
    status: "todo",
  },
];