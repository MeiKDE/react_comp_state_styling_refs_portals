import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const date = new Date();
  return (
    <div className="flex space-x-4 flex-row gap-3">
      <section className="flex-3 border-2 border-pink-300 bg-gray-900">
        <Projects />
      </section>

      <section className="flex-1 border-2 border-green-300">
        <AddProject />
        <AddTask />
        <Tasks />
      </section>
    </div>
  );
}

export default App;
