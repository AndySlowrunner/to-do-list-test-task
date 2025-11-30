import { useDispatch } from "react-redux";
import { deleteTask, toggleCheckbox } from "../../redux/actions";
import "./TaskCard.css";

const TaskCard = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  const handleChekbox = () => {
    dispatch(toggleCheckbox(task.id));
  };

  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div className="thumb">
      <p>Task: {task.title}</p>
      <input
        type="checkbox"
        onChange={handleChekbox}
        checked={task.completed}
      />
      <button type="button" onClick={onEdit}>
        Edit
      </button>
      <button type="button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default TaskCard;
