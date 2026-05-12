// src/components/TaskCard.jsx

import { useState } from "react";
import {
  deleteTask,
  updateTask,
} from "../api/taskApi";

function TaskCard({
  task,
  fetchTasks,
}) {

  if (!task) {
    return null;
  }

  const [title, setTitle] = useState(
    task?.title || ""
  );

  const [description, setDescription] =
    useState(task?.description || "");

  const [priority, setPriority] =
    useState(task?.priority || "low");

  const [status, setStatus] =
    useState(task?.status || "todo");

  const handleUpdate = async () => {
    try {
      const updatedData = {
        title,
        description,
        priority,
        status,
      };

      await updateTask(
        task.id,
        updatedData
      );

      // refresh table
      fetchTasks();

    } catch (error) {
      console.error(
        "Update failed:",
        error
      );
    }
  };

  const handleDelete = async () => {
    try {

      await deleteTask(task.id);

      // refresh table
      fetchTasks();

    } catch (error) {
      console.error(
        "Delete failed:",
        error
      );
    }
  };

  return (
    <div className="bg-white border rounded p-3 shadow-sm mb-3">
      <div className="row align-items-center">

        {/* Title */}
        <div className="col-md-3">
          <label className="form-label fw-bold">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="form-control"
          />
        </div>

        {/* Description */}
        <div className="col-md-3">
          <label className="form-label fw-bold">
            Description
          </label>

          <input
            type="text"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="form-control"
          />
        </div>

        {/* Priority */}
        <div className="col-md-2">
          <label className="form-label fw-bold">
            Priority
          </label>

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="form-select"
          >
            <option value="high">
              High
            </option>

            <option value="medium">
              Medium
            </option>

            <option value="low">
              Low
            </option>
          </select>
        </div>

        {/* Status */}
        <div className="col-md-2">
          <label className="form-label fw-bold">
            Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="form-select"
          >
            <option value="todo">
              Todo
            </option>

            <option value="in-progress">
              In Progress
            </option>

            <option value="completed">
              Completed
            </option>
          </select>
        </div>

        {/* Actions */}
        <div className="col-md-2">
          <label className="form-label fw-bold d-block">
            Actions
          </label>

          <div className="d-flex gap-2">
            <button
              onClick={handleUpdate}
              className="btn btn-primary btn-sm"
            >
              Update
            </button>

            <button
              onClick={handleDelete}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TaskCard;