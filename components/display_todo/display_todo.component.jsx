import { useDispatch, useSelector } from "react-redux";
import {removeTodo, toggleTodo} from '../../redux/todoSlice'
import "./display_todo.styles.css";

const DisplayTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (todoId) => {
    dispatch(removeTodo(todoId));
  };
  const handleToggleTodo = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div className="todo-list">
      {todos &&
        todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <span
              className={`todo-description ${
                todo.isComplete ? "completed" : "not-completed"
              }`}
            >
              {todo.description}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.isComplete ? "Undo" : "Done"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default DisplayTodos;
