const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{task.description}</p>

      <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
        {task.status}
      </span>
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-600 text-sm"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard