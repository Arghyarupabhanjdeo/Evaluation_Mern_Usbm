import React from 'react';
import Greeting from './components/Greeting'; // Import Greeting component

const App = () => {
  return (
    <div>
      <Greeting name="Arghyarupa" />  {/* Passing "Arghyarupa" as the prop */}
    </div>
  );
};

export default App;
