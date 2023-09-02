import InputText from "../InputTextComponent/InputText";
import TodoDate from "../TodoDateComponent/TodoDate";
import AddButton from "../AddButtonComponent/AddButton";
import '../AddTodoComponent/AddTodo.css'

function AddTodo(){
    return(
        <div className="add-todo">
            <InputText />
            <TodoDate/>
            <AddButton/>
        </div>
    );
}

export default AddTodo;