import { Action } from "./useAction";

// This will calculate the actual result and not the terrible one
export const calculate = (actions: Action[]): number => {
  if (actions.length === 0) return 0;

  const expression = removeIllegalOperators(actions).map((action) => {
    if (typeof action === "number") {
      return action.toString();
    } else {
      return action;
    }
  });

  /* eslint no-eval: 0 */
  return eval(expression.join(" "));
};

// Removes operators if they are first or last.
const removeIllegalOperators = (actions: Action[]) => {
  return actions.filter((action, i) => {
    if (typeof action === "string") {
      return !(i === 0 || i === actions.length - 1);
    } else {
      return true;
    }
  });
};
