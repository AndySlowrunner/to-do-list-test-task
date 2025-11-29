import { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import TaskList from './components/TaskList/TaskList.jsx'
import './App.css'
import { fetchData } from './data.js'
import AddNewTask from './components/AddNewTask/AddNewTask.jsx'

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await fetchData();
        setTasks(prev => [...prev, ...data]);
      } catch (error) {
        alert(error)
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <AddNewTask />
      <TaskList />
    </>
  )
}

export default App
