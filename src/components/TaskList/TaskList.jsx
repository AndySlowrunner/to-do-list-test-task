import { useSelector } from "react-redux";
import { useState } from "react";
import { currentPage, getTasks, tasksPerPage } from "../../redux/selectors";
import TaskCard from "../TaskCard/TaskCard";
import Modal from "../ModalEditTask/Modal";

const TaskList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const tasks = useSelector(getTasks);
  const current = useSelector(currentPage);
  const perPage = useSelector(tasksPerPage);
  const startIndex = (current - 1) * perPage;
  const endIndex = startIndex + perPage;
  const visibleTasks = tasks.slice(startIndex, endIndex);

  const openModal = (task) => {
    setIsOpen(true);
    setSelectedTask(task);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTask(null);
  };

  return (
    <>
      <div>
        <ul>
          {visibleTasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} onEdit={() => openModal(task)} />
            </li>
          ))}
        </ul>
      </div>
      {isOpen && <Modal task={selectedTask} onClose={closeModal} />}
    </>
  );
};

export default TaskList;
