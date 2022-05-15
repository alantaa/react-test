import "./App.css";
import Axios from "./Axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Axios />
        <br />
        <p>
          {" "}
          Coded by Alanta, opensourced on{" "}
          <a
            href="https://github.com/alantaa/react-test"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
