import "./App.css";
import AddTodo from "../components/add_todo/add_todo.component";
import DisplayTodos from "../components/display_todo/display_todo.component";

const App = () => {
  return (
    <>
      <center>
        <h1>TODO APP</h1>
      </center>
      <AddTodo />
      <DisplayTodos />
    </>
  );
};

export default App;
