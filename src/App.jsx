import { useState } from 'react'
import './App.css'
function App(props) {
  const [x, setX] = useState(0)



    function f()
    {
        setX(comp => comp + 1)
        console.log(x + 1);
    }
    return (
        <div>
            <h1>{props.t}</h1>
            <button onClick={f}>Count </button>
            <p>Valeur :  {x}</p>
        </div>
    );


}
export default App
