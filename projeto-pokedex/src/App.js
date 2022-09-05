import { useState } from "react";
import { Router } from "./Routes/Router";
import { Context } from "./context/Context";



function App() {

  const [ pokedex, setPokedex ] = useState([])

  return (
    <div className="App">
      <Context.Provider value={{ pokedex, setPokedex}}>
        <Router />
      </Context.Provider>
    </div>
  );
}

export default App;
