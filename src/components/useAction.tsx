import { useReducer } from "react";

export type Operator = "+" | "-" | "*" | "/";

export type Action = number | Operator;

export type Options = { type: "add"; action: Action } | { type: "clear" };

type State = Action[];

const ActionReducer = (state: State, option: Options) => {
  switch (option.type) {
    case "add":
      // Making sure you can't use two operators after each other
      if (
        typeof state[state.length - 1] !== "number" &&
        typeof option.action !== "number"
      ) {
        return state;
      }

      if (
        typeof state[state.length - 1] === "number" &&
        typeof option.action === "number"
      ) {
        // Merging two digits. 1 + 1 = 11
        return state.map((action, i) => {
          if (i === state.length - 1) {
            return parseInt(action.toString() + option.action.toString());
          }
          return action;
        });
      }

      return [...state, option.action];
    case "clear":
      return [];
    default:
      return state;
  }
};

export const useAction = () => {
  return useReducer(ActionReducer, []);
};
