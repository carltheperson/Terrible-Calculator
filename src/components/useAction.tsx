import { useReducer } from "react";

type Operator = "+" | "-" | "*" | "/";

type Action = number | Operator;

type Options = { type: "add"; action: Action } | { type: "clear" };

type State = Action[];

const ActionReducer = (state: State, option: Options) => {
  switch (option.type) {
    case "add":
      if (typeof state[state.length - 1] === "number" || state.length === 0) {
        return [...state, option.action];
      }
      return state;
    case "clear":
      return [];
    default:
      return state;
  }
};

export const useAction = () => {
  return useReducer(ActionReducer, []);
};
