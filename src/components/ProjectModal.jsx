import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ProjectModal = forwardRef(({ onReset, onAddProject }, ref) => {
  const dialog = useRef();
  const inputTitle = useRef();
  const inputDescription = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  const handleSubmit = () => {
    const newProjectData = {
      title: inputTitle.current.value,
      description: inputDescription.current.value,
    };
    onAddProject(newProjectData);
    //clear the input fields
    inputTitle.current.value = ""; // not very react way to do it
    inputDescription.current.value = "";
  };

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      <h2 className="text-xl font-bold text-stone-700 my-4">Add Project</h2>
      <form method="dialog" className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Project Name"
          className="w-full p-2 border-2 border-stone-300 rounded focus:outline-none focus:border-stone-600"
          ref={inputTitle}
        />
        <input
          type="text"
          placeholder="Project Description"
          className="w-full p-2 border-2 border-stone-300 rounded focus:outline-none focus:border-stone-600"
          ref={inputDescription}
        />
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2 text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950"
            onClick={handleSubmit}
          >
            Add Project
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ProjectModal;
