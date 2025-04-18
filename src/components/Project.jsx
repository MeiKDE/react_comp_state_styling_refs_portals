export default function Project() {
  const date = new Date();
  return (
    <section className="p-4">
      <div className="flex flex-col p-6 rounded-lg w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-5xl font-bold">Learning React</h1>
          <button className="px-4 py-2 text-xl bg-gray-600 text-white rounded hover:bg-gray-700">
            Delete
          </button>
        </div>
      </div>
      <div className="w-full max-w-2xl px-6 mx-auto space-y-4">
        <p className="text-xl text-gray-500">{date.toLocaleDateString()}</p>

        <p className="text-xl">
          Learn React from the ground up and in great depth!
        </p>

        <p className="text-xl">
          Start with the basics, finish with advanced knowledge.
        </p>
      </div>
    </section>
  );
}
