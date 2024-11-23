import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <div className='value'><h1>{value}</h1></div>
      <button onClick={() => { setValue(value + 1) }}><h1>Click me</h1></button>
    </div>
  );
}

export default App;
