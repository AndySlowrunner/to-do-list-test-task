import { useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import TaskList from './components/TaskList/TaskList.jsx'
import './App.css'
import { fetchData } from './data.js'
import AddNewTask from './components/AddNewTask/AddNewTask.jsx'
import { useDispatch } from 'react-redux'
import { setTasks } from './redux/actions.js'

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
    </>
  )
}

export default App
