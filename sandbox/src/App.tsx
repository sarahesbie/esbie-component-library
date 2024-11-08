import React from 'react';
import { Button } from '../../src';  

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Component Library Playground</h1>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default App;
