import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

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
      <h2>Add new task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddNewTask;
