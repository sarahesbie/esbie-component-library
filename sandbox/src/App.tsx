import React from "react";
import { Button } from "../../src";

const App: React.FC = () => {
  return (
    <div>
      <h1>Component Library Playground</h1>
      <Button onClick={() => alert("Button clicked!")}>click me!</Button>
    </div>
  );
};

export default App;
