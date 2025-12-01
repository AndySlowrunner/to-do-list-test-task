import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";

const InitialaState = {
  tasks: [],
  currentPage: 1,
  tasksPerPage: 12,
};

const rootReducer = (state = InitialaState, action) => {
  switch (action.type) {
    case "setTasks": {
      return {
        ...state,
        tasks: [...action.payload],
      };
    }
    case "addTask": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case "toggleCheckbox": {
      return {
        ...state,
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
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload;
        }),
      };
    }
    case "updateTask": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return { ...task, title: action.payload.title };
        }),
      };
    }
    case "setCurrentPage": {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
