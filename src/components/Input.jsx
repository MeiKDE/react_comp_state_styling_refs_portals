import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, textarea, type = "text", ...props }, ref) => {
    const inputClasses =
      "w-full p-2 border-2 border-stone-300 rounded focus:outline-none focus:border-stone-600";

    return (
      <p>
        <label>{label}</label>
        {textarea ? (
          <textarea className={inputClasses} ref={ref} {...props} />
        ) : (
          <input type={type} className={inputClasses} ref={ref} {...props} />
        )}
      </p>
    );
  }
);

Input.displayName = "Input";

export default Input;
