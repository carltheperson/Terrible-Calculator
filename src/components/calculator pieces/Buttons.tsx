import React from "react";
import { Options, Operator } from "../useAction";
import { Button } from "./Button";

interface Props {
  dispatch: (value: Options) => void;
  calculateResult: () => void;
  clear: () => void;
}

export const Buttons: React.FC<Props> = ({
  dispatch,
  calculateResult,
  clear,
}) => {
  const createColumn = (startingNumber: number, operator: Operator) => {
    let buttons = [];
    for (let i = startingNumber; i < startingNumber + 3; i++) {
      buttons.push(
        <td>
          <Button
            key={i}
            click={() => dispatch({ type: "add", action: i })}
            text={i.toString()}
            color="white"
          />
        </td>
      );
    }
    buttons.push(
      <td>
        <Button
          key={startingNumber + 3}
          click={() => dispatch({ type: "add", action: operator })}
          color="darkgrey"
          text={operator}
        />
      </td>
    );
    return buttons;
  };

  return (
    <div style={styles.container}>
      <tr>{createColumn(1, "+")}</tr>
      <tr>{createColumn(4, "-")}</tr>
      <tr>{createColumn(7, "*")}</tr>
      <tr style={styles.tr}>
        <td>
          <Button text="C" color="pink" click={clear} />
        </td>
        <td>
          <Button
            click={() => dispatch({ type: "add", action: 0 })}
            text={"0"}
            color="white"
          />
        </td>
        <td>
          <Button text="=" color="lightgreen" click={calculateResult} />
        </td>
        <td>
          <Button
            click={() => dispatch({ type: "add", action: "/" })}
            text={"/"}
            color="darkgrey"
          />
        </td>
      </tr>
    </div>
  );
};

const styles = {
  container: {},
  tr: {
    marginLeft: "10px",
  },
};
