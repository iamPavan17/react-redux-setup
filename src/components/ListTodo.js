import { useSelector } from "react-redux";

export default function ListTodo() {
  const todos = useSelector((state) => state);

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.value}</p>
      ))}
    </div>
  );
}
