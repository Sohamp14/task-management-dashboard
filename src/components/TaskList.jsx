import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.length === 0 && (
        <p className="text-gray-500">No tasks added yet.</p>
      )}

      {tasks.map((task) => (
        <TaskCard key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
