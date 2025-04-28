import noProjectSelected from "../assets/no-projects.png";
import { useContext } from "react";
import { ProjectManagementContext } from "../store/project-management-context";

export default function NoProjectSelected() {
  const { addProject } = useContext(ProjectManagementContext);
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <img src={noProjectSelected} alt="Empty Box" className="w-16 h-16" />
      <h2 className="text-xl font-bold"> No Project Selected</h2>
      <p className="text-muted-foreground">
        Pick or create a project to get started
      </p>

      <div className="flex items-center justify-end gap-4 my-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={addProject}
        >
          Create New Project
        </button>
      </div>
    </div>
  );
}
