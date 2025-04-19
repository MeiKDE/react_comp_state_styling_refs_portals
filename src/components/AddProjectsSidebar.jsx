import { useRef } from "react";
import ProjectModal from "./ProjectModal";

export default function AddProjectsSidebar({
  onAddProject,
  projects,
  onSelectIndex,
}) {
  const dialog = useRef();
  const handleReset = () => {
    dialog.current.close();
  };

  const onClickProjectHandler = (index) => {
    onSelectIndex(index);
    console.log(projects[index]);
    // newProject array of objects
    const newProject = {
      id: projects[index].id,
      title: projects[index].title,
      description: projects[index].description,
      isVisible: true,
    };
    console.log(newProject);
  };

  return (
    <>
      <ProjectModal
        ref={dialog}
        onReset={handleReset}
        onAddProject={onAddProject}
      />

      <div className="w-full mt-8 ">
        <div className="w-full max-w-2xl mx-auto px-6">
          <header className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              YOUR PROJECTS
            </h2>
            <button
              className="px-4 py-2 text-xl bg-stone-600 text-white rounded hover:bg-stone-700"
              onClick={() => dialog.current.open()}
            >
              + Add Project
            </button>
          </header>
          <div className="mt-8 text-white">
            {projects.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {projects.map((project, index) => (
                  <li
                    key={project.id || crypto.randomUUID()} // Fallback to random ID if id is not present
                    className="text-left"
                  >
                    <button
                      className="px-4 py-2 text-xl text-white rounded-xl hover:bg-stone-600 w-full text-left"
                      onClick={() => onClickProjectHandler(index)}
                    >
                      {project.title}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>current no project(s) added</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
