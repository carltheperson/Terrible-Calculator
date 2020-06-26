import React, { useState, useEffect } from "react";
import { Display } from "./calculator pieces/Display";
import { useAction } from "./useAction";
import { calculate } from "./calculate";
import { Buttons } from "./calculator pieces/Buttons";
import { answers } from "./answers";

interface Props {}

export const Calculator: React.FC<Props> = () => {
  const [text, setText] = useState<string>("");
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

  const calculateResult = () => {
    const actualResult = calculate(actions);

    let posibleAnswers: string[] = [];

    answers.forEach((answer) => {
      const possibleAnswer = answer(actualResult);
      if (possibleAnswer.condition) {
        posibleAnswers.push(possibleAnswer.answer);
      }
    });

    dispatch({ type: "clear" });
    setText(posibleAnswers[Math.floor(Math.random() * posibleAnswers.length)]);
  };

  return (
    <div style={styles.container}>
      <Display text={text} />
      <Buttons
        dispatch={dispatch}
        calculateResult={calculateResult}
        clear={() => {
          dispatch({ type: "clear" });
          setText("");
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    margin: "auto",
    width: "290px",
    paddingBottom: "10px",
    backgroundColor: "grey",
    borderRadius: "15px",
    overflow: "auto",
  },
};
