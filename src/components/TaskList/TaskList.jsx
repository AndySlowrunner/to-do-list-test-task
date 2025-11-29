import { useSelector } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";
import { getTasks } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(getTasks);

  console.log(tasks);
  return (
    <>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
