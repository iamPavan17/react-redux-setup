import { useState } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import { generateGuid } from "./helpers";
import { addTodo } from "./redux/actions/todoActions";

function App() {
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
    <div className="App">
      <h1>Hello React!</h1>
      <input value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>

      {todos.map((todo) => (
        <p key={todo.id}>{todo.value}</p>
      ))}
    </div>
  );
}

export default App;
