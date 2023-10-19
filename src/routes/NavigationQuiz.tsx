import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateToogle } from "../interfaces";
import './AppRouter.scss';

export const NavigationQuiz = () => {
    const mode = useSelector((state:stateToogle) => state.mode.toggle);
    const location = useLocation();
    return (
        <nav className={mode ? "nav-wrapper-dark" : "nav-wrapper"}>
            <Link className={location.pathname === "/javascript-quiz" ? "active" : ""} to='/javascript-quiz'>Statistic</Link>
            <Link className={location.pathname === "/html-quiz" ? "active" : ""} to='/html-quiz'>Performers</Link>
            <Link className={location.pathname === "/css-quiz" ? "active" : ""} to='/css-quiz'>Operations</Link>
            <Link className={location.pathname === "/" ? "active" : ""} to='/'>ToDo List</Link>
        </nav>
    )
}