import { useState } from 'react';
import './App.css';

function App() {

  console.log("Changes in dev1");

  const [count,setCount] = useState(0);


  console.log("Changes on master");

  return (
    <div className="App">
      <h1>Counter App</h1>
      <hr />
      <h4>Count: {count}</h4>
      <button className="inc" onClick={()=>setCount(count+1)}>Increment</button>
      <button className="dec" onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
