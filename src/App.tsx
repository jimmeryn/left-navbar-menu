import * as React from "react";
import "./styles/style.css";
import LeftMenu from "./components/LeftMenu";

const App: React.FunctionComponent = () => (
  <div className="App">
    <header className="App-header">Left Menu App</header>
    <div className="Container">
      <LeftMenu />
      <div className="NavBar-center"></div>
      <div className="NavBar-right"></div>
    </div>
  </div>
);

export default App;
