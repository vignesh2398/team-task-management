// src/components/TaskCard.jsx

function TaskCard({ task }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">
          {task.title}
        </h3>

        <span className="text-sm bg-gray-200 px-2 py-1 rounded">
          {task.priority}
        </span>
      </div>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm">
          {task.status}
        </span>

        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;