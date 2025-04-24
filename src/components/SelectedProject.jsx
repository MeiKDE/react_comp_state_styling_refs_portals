import Tasks from "./Tasks";

export default function SelectedProject({
  onDeleteProject,
  selectedProject,
  tasks,
  onAddTask,
  onDeleteTask,
}) {
  console.log(selectedProject);
  return (
    <div className=" bg-stone-100 w-full py-4 my-4 rounded-md shadow-md ">
      <header className="border-b border-b-gray-200 p-4 gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold"> {selectedProject.title}</h1>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => onDeleteProject(selectedProject.id)}
          >
            Delete
          </button>
        </div>
        <p className="text-muted-foreground">{selectedProject.dueDate}</p>
        <p className="text-muted-foreground">{selectedProject.description}</p>
      </header>
      <Tasks
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onAddTask={onAddTask}
        selectedProject={selectedProject}
      />
    </div>
  );
}
