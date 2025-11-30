import { nanoid } from "nanoid";

export const setTasks = (data) => {
  return {
    type: "setTasks",
    payload: data,
  };
};

export const addTask = (text) => {
  return {
    type: "addTask",
    payload: {
      id: nanoid(),
      title: text,
      completed: false,
    },
  };
};

export const toggleCheckbox = (taskId) => {
  return {
    type: "toggleCheckbox",
    payload: taskId,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "deleteTask",
    payload: taskId,
  };
};

export const updateTask = (text, taskId) => {
  return {
    type: "updateTask",
    payload: {
      title: text,
      id: taskId,
    },
  };
};
