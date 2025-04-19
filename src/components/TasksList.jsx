export default function TasksList() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl px-6">
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between items-center p-4 bg-stone-100 rounded">
            <p className="text-xl">List of tasks 1</p>
            <button className="text-stone-600 hover:text-stone-950">
              Clear
            </button>
          </div>
          <div className="flex justify-between items-center p-4 bg-stone-100 rounded">
            <p className="text-xl">List of tasks 2</p>
            <button className="text-stone-600 hover:text-stone-950">
              Clear
            </button>
          </div>
          <div className="flex justify-between items-center p-4 bg-stone-100 rounded">
            <p className="text-xl">List of tasks 3</p>
            <button className="text-stone-600 hover:text-stone-950">
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
