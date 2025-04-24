import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // Click on "Add Project" button to open the NewProject component
  const addProjectHandler = () => {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: null,
    }));
  };

  // Click on "Cancel" button to close the NewProject component
  const cancelProjectHandler = () => {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
    }));
  };

  // Click on "Save" button to save the new project
  const saveProjectHandler = (projectData) => {
    setProjectState((prev) => {
      const newProject = {
        id: crypto.randomUUID(),
        ...projectData,
      };
      return {
        ...prev,
        selectedProjectId: undefined, // Close the NewProject component
        projects: [...prev.projects, newProject],
      };
    });
  };

  const selectProjectHandler = (projectId) => {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: projectId,
    }));
  };

  // Selected Project
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  // Delete a project
  const deleteProjectHandler = (projectId) => {
    setProjectState((prev) => {
      return {
        ...prev,
        projects: prev.projects.filter((project) => project.id !== projectId),
      };
    });
  };

  const addTaskHandler = (text) => {
    setProjectState((prev) => {
      const newTasks = {
        id: crypto.randomUUID(),
        text: text,
        projectId: prev.selectedProjectId,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTasks],
      };
    });
  };

  const deleteTaskHandler = (taskId) => {
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== taskId),
      };
    });
  };

  // Render the CONTENT based on the selected project by default
  let content = (
    <SelectedProject
      onDeleteProject={deleteProjectHandler}
      selectedProject={selectedProject}
      tasks={projectState.tasks}
      onAddTask={addTaskHandler}
      onDeleteTask={deleteTaskHandler}
    />
  );

  // If there is no project selected, render the NoProjectSelected component
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={addProjectHandler} />;

    // Else, render the NewProject component
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveProject={saveProjectHandler}
        onCancelProject={cancelProjectHandler}
      />
    );
  }

  return (
    <main className="h-screen bg-gray-100 p-8">
      <div className="h-full max-w-7xl mx-auto flex gap-8 rounded-xl shadow-lg">
        <ProjectSidebar
          className="w-1/4 min-w-64 bg-gray-900 p-6 rounded-l-xl flex flex-col items-center justify-start"
          bg-stone-900
          onAddProject={addProjectHandler}
          projects={projectState.projects}
          onSelectProject={selectProjectHandler}
          selectedProject={selectedProject}
        />
        <div className="w-3/4 p-8 flex items-center justify-center flex-grow">
          <div className="max-w-3xl w-full flex items-center justify-center">
            {content}
          </div>
        </div>
      </div>
    </main>
  );
}
