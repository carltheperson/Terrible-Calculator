import React from "react";

interface Props {
  text: string;
  color: string;
  click: () => void;
}

export const Button: React.FC<Props> = ({ text, color, click }) => {
  return (
    <div style={{ ...styles.button, backgroundColor: color }} onClick={click}>
      <h1 style={styles.text}>{text}</h1>
    </div>
  );
};

const styles = {
  button: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
    borderRadius: "5px",
    margin: "10px",
  },
  text: {
    fontSize: "40px",
    textAlign: "center" as const,
    margin: "0",
  },
};
