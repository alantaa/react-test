import logo from "./logo.svg";
import "./App.css";
import Axios from "./Axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Axios />
      </header>
    </div>
  );
}

export default App;
