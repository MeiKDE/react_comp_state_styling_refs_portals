import { useState } from "react";
import Project from "./components/Project";
import AddProjectsSidebar from "./components/AddProjectsSidebar";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const date = new Date();
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleAddProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
    setSelectedIndex(projects.length - 1);
  };

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    setSelectedIndex(tasks.length - 1);
  };

  return (
    <div className="flex space-x-4 flex-row gap-3">
      <section className="flex-3 border-2 border-pink-300 bg-gray-900">
        <AddProjectsSidebar
          onAddProject={handleAddProject}
          projects={projects}
          onSelectIndex={setSelectedIndex}
        />
      </section>

      <section className="flex-1 border-2 border-green-300">
        <Project project={projects[selectedIndex]} />
        {selectedIndex !== null && (
          <>
            <AddTask onAddTask={handleAddTask} />
            <TasksList tasks={tasks} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
