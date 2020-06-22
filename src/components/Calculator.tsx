import React from "react";

interface Props {}

export const Calculator: React.FC<Props> = ({}) => {
  return <div style={styles.container}></div>;
};

const styles = {
  container: {
    margin: "auto",
    width: "300px",
    height: "500px",
    backgroundColor: "grey",
    borderRadius: "15px",
  },
};
