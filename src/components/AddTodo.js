import { useState } from "react";
import { useDispatch } from "react-redux";

import { generateGuid } from "../helpers";
import { addTodo } from "../redux/actions/todoActions";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      id: generateGuid(),
      value,
    };

    // setting the text value to empty
    setValue("");

    // dispatching an action
    dispatch(addTodo(payload));
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
