import React, { useState, useEffect } from "react";
import { Display } from "./calculator pieces/Display";
import { Button } from "./calculator pieces/Button";
import { useAction } from "./useAction";

interface Props {}

export const Calculator: React.FC<Props> = () => {
  const [text, setText] = useState<string>("");

  const [actions, dispatch] = useAction();

  useEffect(() => {
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
