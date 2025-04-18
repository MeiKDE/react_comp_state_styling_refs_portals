export default function AddTask() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-5xl font-bold">Tasks</h1>
        </div>
      </div>
      <div className="w-full max-w-2xl px-6">
        <div className="flex gap-4 mt-4">
          <input
            className="flex-1 text-xl p-2 border rounded"
            type="text"
            placeholder="Add a task"
          />
          <button className="text-xl px-4 py-2 bg-stone-700 text-white rounded hover:bg-stone-600">
            Add Task
          </button>
        </div>
      </div>
    </section>
  );
}
