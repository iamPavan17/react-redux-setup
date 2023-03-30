import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todoActions";

export default function ListTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const handleClick = (id) => {
    dispatch(updateTodo({ id }));
  };

  return (
    <>
      {!todos.length && <p>No todos yet!</p>}
      {todos.map(({ id, value, isComplete }) => (
        <p
          className={isComplete ? "complete" : "in-complete"}
          key={id}
          onClick={() => handleClick(id)}
        >
          {isComplete ? "👌🏼" : "👋🏼"} {value}
        </p>
      ))}
    </>
  );
}
