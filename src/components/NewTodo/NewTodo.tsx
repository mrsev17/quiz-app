import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { newTaskTodo } from "../../redux/tasks/actionCreators";
import "./NewTodo.scss";

const NewTodo = () => {
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();
    const changeNewTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }
    const newTaskSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(newTaskTodo(newTask));
        setNewTask('');
    }
    return (
        <form onSubmit={newTaskSubmit}>
            <input type="text" value={newTask} onChange={changeNewTaskInput}  placeholder="Write new Task"  />
            <button>Create Task</button>
        </form>
    )
}

export default NewTodo;