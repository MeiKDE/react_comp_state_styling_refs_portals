import { useState } from "react";
export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  const onChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const onClickHandler = () => {
    if (enteredTask.trim().length === 0) {
      alert("Please enter a task");
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex gap-2">
      <input
        label="Task"
        type="text"
        onChange={onChangeHandler}
        value={enteredTask}
        className="border border-gray-300 rounded-md p-2"
      />

      <button
        onClick={onClickHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Task
      </button>
    </div>
  );
}
