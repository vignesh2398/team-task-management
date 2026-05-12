// src/store/taskStore.js

import { create } from "zustand";
import { getTasks } from "../api/taskApi";

const useTaskStore = create((set) => ({
  tasks: [],

  fetchTasks: async () => {
    try {
      const response = await getTasks();

      console.log(response.data);

      set({
         tasks: response.data.tasks,
      });
    } catch (error) {
      console.error(
        "Error fetching tasks:",
        error
      );
    }
  },
}));

export default useTaskStore;