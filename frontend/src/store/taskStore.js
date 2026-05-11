// src/store/taskStore.js

import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    {
      id: "1",
      title: "Build Backend",
      description:
        "Create Express APIs",
      priority: "high",
      status: "todo",
    },
  ],

  fetchTasks: async () => {
    // later connect backend
  },
}));

export default useTaskStore;