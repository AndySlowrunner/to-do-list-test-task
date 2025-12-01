import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./data.js";
import { setTasks } from "./redux/actions.js";
import Header from "./components/Header/Header.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import AddNewTask from "./components/AddNewTask/AddNewTask.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await fetchData();
        dispatch(setTasks(data));
      } catch (error) {
        alert(error);
      }
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <>
      <Header />
      <AddNewTask />
      <TaskList />
      <Pagination />
    </>
  );
};

export default App;
