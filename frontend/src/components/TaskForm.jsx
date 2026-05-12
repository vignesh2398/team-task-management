// src/components/TaskForm.jsx

import { useState } from "react";
import { createTask } from "../api/taskApi";

function TaskForm({ fetchTasks }) {

  const [description, setDescription] =
    useState("");

  const [title, setTitle] =
    useState("");

  const [priority, setPriority] =
    useState("");

  const [status, setStatus] =
    useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();

    try {

      const data = {
        title,
        description,
        priority,
        status,
      };

      const response =
        await createTask(data);

      console.log(
        "Task created:",
        response.data
      );

      // refresh table
      fetchTasks();

      // clear form
      setTitle("");
      setDescription("");
      setPriority("");
      setStatus("");

    } catch (error) {
      console.error(
        "Error creating task:",
        error
      );
    }
  };

  return (
    <div className="container-fluid">

      <h2 className="fw-bold mb-4">
        Create Task
      </h2>

      <form
        onSubmit={handleAddTask}
        className="row g-3 align-items-end"
      >

        {/* Title */}
        <div className="col-md-3">
          <label
            htmlFor="title"
            className="form-label fw-semibold"
          >
            Task Title
          </label>

          <input
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="form-control"
          />
        </div>

        {/* Description */}
        <div className="col-md-3">
          <label
            htmlFor="description"
            className="form-label fw-semibold"
          >
            Description
          </label>

          <input
            id="description"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="form-control"
          />
        </div>

        {/* Priority */}
        <div className="col-md-2">
          <label
            htmlFor="priority"
            className="form-label fw-semibold"
          >
            Priority
          </label>

          <select
            id="priority"
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="form-select"
          >
            <option value="">
              Select
            </option>

            <option value="low">
              Low
            </option>

            <option value="medium">
              Medium
            </option>

            <option value="high">
              High
            </option>
          </select>
        </div>

        {/* Status */}
        <div className="col-md-2">
          <label
            htmlFor="status"
            className="form-label fw-semibold"
          >
            Status
          </label>

          <select
            id="status"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="form-select"
          >
            <option value="">
              Select
            </option>

            <option value="todo">
              To Do
            </option>

            <option value="in-progress">
              In Progress
            </option>

            <option value="done">
              Done
            </option>
          </select>
        </div>

        {/* Button */}
        <div className="col-md-2">
          <button
            type="submit"
            className="btn btn-dark w-100"
          >
            Add Task
          </button>
        </div>

      </form>
    </div>
  );
}

export default TaskForm;