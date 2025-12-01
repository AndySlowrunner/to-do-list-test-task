import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/actions";
import { useState } from "react";
import "./Modal.css";

const Modal = ({ task, onClose }) => {
  const [text, setText] = useState(task.title);
  const dispatch = useDispatch();
    
  const handlSubmit = event => {
    event.preventDefault();
    dispatch(updateTask(text, task.id));
    onClose();
  };

  const handleChange = event => setText(event.target.value);

  return (
      <div className="overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <h3>Edit task</h3>
          <form onSubmit={handlSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button className="save-btn" type="onSubmit">
              Save
            </button>
          </form>
          <button className="close-btn" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
  );
};

export default Modal;
