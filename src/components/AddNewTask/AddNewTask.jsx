import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import "./AddNewTask.css";

const AddNewTask = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const input = event.target;
    event.preventDefault();
    if (!input.elements.text.value) {
      alert("Please, enter task text!");
    }
    dispatch(addTask(input.elements.text.value));
    input.reset();
  };

  return (
    <>
      <p>Add new task</p>
      <form className="add-form" onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddNewTask;
