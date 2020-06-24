import React, { useState, useEffect } from "react";
import { Display } from "./calculator pieces/Display";
import { Button } from "./calculator pieces/Button";
import { useAction } from "./useAction";
import { calculate } from "./calculate";

interface Props {}

export const Calculator: React.FC<Props> = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [actions, dispatch] = useAction();

  useEffect(() => {
    if (actions.length === 0) return;
    setText(
      actions
        .map((action) => {
          return typeof action === "number"
            ? action.toString()
            : " " + action + " ";
        })
        .join("")
    );
  }, [actions]);

  useEffect(() => {
    if (result === "") return;
    dispatch({ type: "clear" });
    setText(result);
  }, [result, dispatch]);

  return (
    <div style={styles.container}>
      <Display text={text} />
      <Button
        text="1"
        color="white"
        click={() => dispatch({ type: "add", action: 1 })}
      />
      <Button
        text="+"
        color="white"
        click={() => dispatch({ type: "add", action: "+" })}
      />

      <Button
        text="="
        color="darkgrey"
        click={() => setResult(calculate(actions).toString())}
      />
    </div>
  );
};

const styles = {
  container: {
    margin: "auto",
    width: "300px",
    height: "500px",
    backgroundColor: "grey",
    borderRadius: "15px",
    overflow: "auto",
  },
};
