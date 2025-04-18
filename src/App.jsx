import { useState } from "react";
import Project from "./components/Project";
import AddProjects from "./components/AddProjects";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const date = new Date();
  const [projects, setProjects] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleAddProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
    setSelectedIndex(projects.length - 1);
  };

  return (
    <div className="flex space-x-4 flex-row gap-3">
      <section className="flex-3 border-2 border-pink-300 bg-gray-900">
        <AddProjects
          onAddProject={handleAddProject}
          projects={projects}
          onSelectIndex={setSelectedIndex}
        />
      </section>

      <section className="flex-1 border-2 border-green-300">
        <Project />
        <AddTask />
        <Tasks />
      </section>
    </div>
  );
}

export default App;
