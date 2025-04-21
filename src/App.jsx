import { useState } from "react";
import Project from "./components/Project";
import ProjectsSidebar from "./components/ProjectsSidebar";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const date = new Date();
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddProject = (project) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { ...project, id: crypto.randomUUID(), isVisible: true },
    ]);
    setSelectedProject(project);
  };

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className="flex space-x-4 flex-row gap-3">
      <section className="flex-3 border-2 border-pink-300 bg-gray-900 rounded-r-xl">
        <ProjectsSidebar onAddProject={handleAddProject} projects={projects} />
      </section>

      <section className="flex-1 border-2 border-green-300">
        <>
          {selectedProject ? (
            <>
              <Project project={selectedProject} />
              <AddTask onAddTask={handleAddTask} />
              <TasksList tasks={tasks} />
            </>
          ) : (
            <NoProjectSelected />
          )}
        </>
      </section>
    </div>
  );
}

export default App;
