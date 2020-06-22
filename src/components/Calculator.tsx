import React from "react";
import { Display } from "./calculator pieces/Display";

interface Props {}

export const Calculator: React.FC<Props> = ({}) => {
  return (
    <div style={styles.container}>
      <Display text="hello" />
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
