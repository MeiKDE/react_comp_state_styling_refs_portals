export default function ProjectSidebar({
  onAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-64 border-r border-r-gray-200 p-4 bg-stone-900 rounded-md justify-center items-center text-white">
      <h2 className="text-xl font-bold">Your Projects</h2>
      <div>
        <button
          onClick={onAddProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer ${
              selectedProjectId === project.id
                ? "bg-gray-100 text-black"
                : "text-white"
            }`}
            onClick={() => onSelectProject(project.id)}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
