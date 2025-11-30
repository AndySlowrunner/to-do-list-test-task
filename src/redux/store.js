import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";

const InitialaState = {
  tasks: [],
};

const rootReducer = (state = InitialaState, action) => {
  switch (action.type) {
    case "setTasks": {
      return {
        tasks: [...action.payload],
      };
    }
    case "addTask": {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    case "toggleCheckbox": {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, completed: !task.completed };
        }),
      };
    }
    case "deleteTask": {
      return {
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload;
        }),
      };
    }
    case "updateTask": {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return { ...task, title: action.payload.title };
        }),
      };
    }
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
