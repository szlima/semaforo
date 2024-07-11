import { useState } from 'react';

import TrafficLight from './components/TrafficLight';

const lights= [
  'red', 'yellow', 'green'
];

function App() {

  const [selectedColor, setSelectedColor]= useState(lights.length-1);
  
  return (
    <main className="main">
      <h1 className="main__title">Semáforo</h1>
      <TrafficLight lights={lights} selectedColor={selectedColor}/>
    </main>
  );
}

export default App;
