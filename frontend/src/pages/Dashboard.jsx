// src/pages/Dashboard.jsx

import { useEffect, useMemo, useState } from "react";

import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";

import useTaskStore from "../store/taskStore";

import useDebounce from "../hooks/useDebounce";

function Dashboard() {
  const {
    tasks,
    fetchTasks,
  } = useTaskStore();

  const [search, setSearch] =
    useState("");

  const debouncedSearch =
    useDebounce(search, 300);

  useEffect(() => {
    fetchTasks();
  },[]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title
        .toLowerCase()
        .includes(
          debouncedSearch.toLowerCase()
        )
    );
  }, [tasks, debouncedSearch]);

  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container" style={{ maxWidth: '70rem' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-4 fw-bold">
            Team Task Management
          </h1>
        </div>


        <div className="card mb-4 d-flex">
          <div className="card-body">
            <TaskForm fetchTasks={fetchTasks} />
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">

            <label
              htmlFor="search"
              className="form-label fw-bold"
            >
              Search Tasks
            </label>

            <SearchBar
              id="search"
              value={search}
              onChange={setSearch}
            />

          </div>
        </div>

        <div className="row g-3 d-flex">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div key={task.id} className="col-12">
                <TaskCard
                  task={task}
                  fetchTasks={fetchTasks}
                />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="card">
                <div className="card-body text-center">
                  No tasks found
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;