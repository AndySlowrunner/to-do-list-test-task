import './TaskCard.css'

const TaskCard = ({ task }) => {
    const done = new String(task.completed);
    return (
        <div className="thumb">
            <button onClick={() => alert('Task deleting')}>X</button>
            <p>Title: {task.title}</p>
            <p>Done: {done}</p>
            <button onClick={() => alert('Modal for editing')}>Edit</button>
        </div>
    );
};

export default TaskCard;