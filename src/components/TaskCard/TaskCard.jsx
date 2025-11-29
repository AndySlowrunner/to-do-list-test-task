import './TaskCard.css'

const TaskCard = ({ task }) => {

    return (
      <div className="thumb">
        <p>Title: {task.title}</p>
        <p>Done: </p>
        <input type="checkbox" />
        <button onClick={() => alert("Modal for editing")}>Edit</button>
        <button onClick={() => alert("Task deleting")}>X</button>
      </div>
    );
};

export default TaskCard;