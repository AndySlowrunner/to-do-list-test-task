import TaskCard from "../TaskCard/TaskCard";

const TaskList = ({arr}) => {
  console.log(arr);
  return (
    <>
      <div>
        <ul>
          {arr.map((el) => (
            <li key={el.id}>
              <TaskCard task={el}/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
