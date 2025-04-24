import NewTask from "./NewTask";

export default function Tasks({
  tasks,
  onDeleteTask,
  onAddTask,
  selectedProject,
}) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-stone-700">Tasks</h2>

      <NewTask onAddTask={onAddTask} />

      {tasks.length === 0 && (
        <p className="text-stone-500">No tasks found. Start adding some!</p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 bg-stone-100 rounded-md">
          {tasks
            .filter((task) => task.projectId === selectedProject.id)
            .map((task) => (
              <li key={task.id} className="flex justify-between items-center">
                <span className="text-stone-500">{task.text}</span>
                <button
                  className="hover:text-red-500 text-stone-700"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
