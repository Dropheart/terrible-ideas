import { useState } from 'react';
import './App.css';
import Slot from './components/Button.js';
import { useEffect } from 'react';
import skibdi0 from './assets/skibdi0.webp';
import skibdi1 from './assets/skibdi1.png';
import skibdi2 from './assets/skibdi2.png';
import skibdi3 from './assets/skibdi3.png';
import skibdi4 from './assets/skibdi4.png';
import skibdi5 from './assets/skibdi5.png';
import skibdi6 from './assets/skibdi6.png';
import skibdi7 from './assets/skibdi7.webp';
import skibdi8 from './assets/skibdi8.webp';
import skibdi9 from './assets/skibdi9.webp';

function App() {
  let [numbers, setNumbers] = useState([7, 7, 7]);
  const timeouts = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
    1100, 1200, 1300, 1400, 1500, 1600, 1700, 2000, 2400, 3000];


  let allSkibdis = [skibdi0, skibdi1, skibdi2, skibdi3, skibdi4, skibdi5, skibdi6, skibdi7, skibdi8, skibdi9];
  let [skibdis, setSkibdis] = useState([skibdi0, skibdi0, skibdi0]);


  function gamble() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const newNumbers = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];

        setNumbers(newNumbers);
        setSkibdis([allSkibdis[newNumbers[0]], allSkibdis[newNumbers[1]], allSkibdis[newNumbers[2]]]);
      }, timeouts[i]);
    }
  }

  useEffect(() => {
    gamble()
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center">
        <div className="m-auto flex justify-between p-5 max-h-screen">
          <Slot text={numbers[0]} image={skibdis[0]}/>
          <Slot text={numbers[1]} image={skibdis[1]}/>
          <Slot text={numbers[2]} image={skibdis[2]}/>
        </div>
    </div>
  );
}

export default App;
