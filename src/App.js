import NavBar from "./components/NavbarComponent/NavBar";
import AddTodo from "./components/AddTodoComponent/AddTodo";
import TodoList from "./components/TodoListComponent/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
