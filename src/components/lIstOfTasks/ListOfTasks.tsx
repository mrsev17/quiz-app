import { useSelector } from "react-redux";
import './ListOfTasks.scss';
import { stateToogle } from "../../interfaces";

const ListOfTasks = () => {
    const tasks = useSelector((state:any) => state.tasks);
    const mode = useSelector((state:stateToogle) => state.mode.toggle);
    console.log(tasks)
    return (
        <div className={mode ? 'list-active' : "list-active-dark"}>
            <ul>
                {tasks.map((item:any | undefined) => {
                    return <li key={item.id}>{item.text}</li>
                })}
            </ul>
        </div>
    )
}

export default ListOfTasks;