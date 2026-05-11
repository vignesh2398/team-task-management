// src/components/TaskForm.jsx

function TaskForm() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Create Task
      </h2>

      <form className="grid gap-4">
      <div>
        <label htmlFor="title" className="display:flex
        ">Task Title</label>
        <textarea
          type="text"
          placeholder="Task title"
          className="border p-2 rounded"
        />
        </div>

<div>

    <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Description"
          className="border p-2 rounded"
        />
            
</div>


<div>
    <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          className="border p-2 rounded"
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
</div>

<div>


    <label htmlFor="status">Status</label>
        <select
          id="status"
          className="border p-2 rounded"
        >
          <option value="">Select Status</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        </div>

        <button
          className="bg-black text-white p-2 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;