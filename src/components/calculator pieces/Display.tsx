import React from "react";

interface Props {
  text: string;
}

export const Display: React.FC<Props> = ({ text }) => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{text}</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#2e2e2e",
    borderRadius: "5px",
    margin: "10px",
    height: "40px",
    padding: "10px",
  },
  text: {
    color: "white",
    margin: "0",
  },
};
