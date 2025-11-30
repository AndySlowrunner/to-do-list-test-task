import { useSelector } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";
import { getTasks } from "../../redux/selectors";
import { useState } from "react";
import { Modal } from "../ModalEditTask/Modal";

const TaskList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const tasks = useSelector(getTasks);

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
          {tasks.map((task) => (
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
