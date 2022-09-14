import { useState } from "react";
import { Router } from "./Routes/Router";
import { Context } from "./context/Context";
import { GlobalState } from "./context/GlobalState";



function App() {

  return (
    <div className="App">
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
