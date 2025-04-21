import { useRef } from "react";
import NewProjectModal from "./NewProjectModal";
import Button from "./Button";
import NoProjectSelected from "./NoProjectSelected";

export default function ProjectsSidebar({ onAddProject, projects }) {
  const dialog = useRef();
  const handleReset = () => {
    dialog.current.close();
  };

  const onClickProjectHandler = (project) => {
    onAddProject(project);
  };

  return (
    <>
      <NewProjectModal
        ref={dialog}
        onReset={handleReset}
        onAddProject={onAddProject}
      />

      <div className="w-full mt-8 ">
        <div className="w-full max-w-2xl mx-auto px-6">
          <header className="mb-8">
            <h2 className="text-2xl font-bold uppercase md:text-xl text-white mb-4">
              YOUR PROJECTS
            </h2>
            <Button onClick={() => dialog.current.open()}>+ Add Project</Button>
          </header>
          <div className="mt-8 text-white">
            {projects.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {projects.map((project) => (
                  <li
                    key={project.id || crypto.randomUUID()}
                    className="text-left"
                  >
                    <button
                      className="px-4 py-2 text-xl text-white rounded-xl hover:bg-stone-600 w-full text-left"
                      onClick={() => onClickProjectHandler(project)}
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
