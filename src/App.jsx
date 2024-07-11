import { useState } from 'react';

import TrafficLight from './components/TrafficLight';

const lights= [
  {color: 'red', name: 'vermelha'},
  {color: 'yellow', name: 'amarela'},
  {color: 'green', name: 'verde'}
];

function App() {

  const [selectedColor, setSelectedColor]= useState(lights.length-1);
  
  return (
    <main className="main">
      <h1 className="main__title">Semáforo</h1>
      <p className={`main__info main__info--${lights[selectedColor].color}`}>A luz acesa é a {lights[selectedColor].name}</p>
      <TrafficLight lights={lights} selectedColor={selectedColor} changeSelectedColor={setSelectedColor}/>
    </main>
  );
}

export default App;
