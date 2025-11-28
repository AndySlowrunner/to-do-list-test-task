import { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import TaskList from './components/TaskList/TaskList.jsx'
import './App.css'
import { fetchData } from './data.js';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchData();
        setTasks(prev => [...prev, ...data]);
      } catch (error) {
        alert(error)
      }
    };
    getTasks();
  }, []);

  return (
    <>
      <Header />
      <TaskList arr={tasks} />
    </>
  )
}

export default App
