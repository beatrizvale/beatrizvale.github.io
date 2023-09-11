import React from "react";
import "./App.scss";
import Main from "./containers/Main";

document.documentElement.style.setProperty('--viewport-width', window.innerWidth + 'px');

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
