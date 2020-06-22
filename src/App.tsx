import React from "react";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.title}>Terrible Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
}

const styles = {
  title: {
    textAlign: "center" as const,
    paddingTop: "50px",
    fontSize: "60px",
  },
};

export default App;
