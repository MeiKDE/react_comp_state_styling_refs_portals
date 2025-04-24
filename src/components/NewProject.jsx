import Input from "./Input";
import { useRef, forwardRef } from "react";
import Modal from "./Modal";

const NewProject = forwardRef(function NewProject(
  { onSaveProject, onCancelProject, ...props },
  ref
) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSaveProject() {
    // Check for errors in input fields
    const formData = {
      title: titleRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      dueDate: dueDateRef.current.value.trim(),
    };
    // this checks if any of the form data is empty
    if (Object.values(formData).some((value) => !value)) {
      modalRef.current.open(); // open the modal if there is an error
      return;
    }
    // else, save the project
    onSaveProject(formData);
  }

  return (
    <>
      <Modal ref={modalRef} buttonLabel="Close">
        <h2 className="text-xl font-bold">Invalid Input</h2>
        <p className="text-stone-500">Oops! Looks like you forgot a value.</p>
        <p> Please enter a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancelProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>

        <form className="mt-4">
          <Input label="Title" type="text" ref={titleRef} />
          <Input label="Description" textarea rows={3} ref={descriptionRef} />
          <Input label="Due Date" type="date" ref={dueDateRef} />
        </form>
      </div>
    </>
  );
});

export default NewProject;
