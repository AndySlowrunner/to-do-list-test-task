import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";

const InitialaState = {
  tasks: [
    { id: 1, title: "learn Redux", done: false },
    { id: 2, title: "learn JavaScript", done: true },
    { id: 3, title: "learn React Router", done: true },
  ],
};

const rootReducer = (state = InitialaState) => {
    return state;
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
