import RemoveButton from "../RemoveButton/RemoveButton";
import EditButton from "../EditButton/EditButton";
import "../TodoComponent/Todo.css";

export default function Todo() {
  return (
    <li className="Todo">
      asdasdasd
      <span className="Todo-Right">
        <EditButton />
        <RemoveButton />
      </span>
    </li>
  );
}
