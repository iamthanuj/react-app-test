import AddTodo from "../AddTodoComponent/AddTodo";
import TodoList from "../TodoListComponent/TodoList";
import "../MainComponent/Main.css";

export default function Main() {
  return (
    <div className="Main">
      <AddTodo />
      <TodoList />
    </div>
  );
}
