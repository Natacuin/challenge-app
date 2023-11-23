import logo from './logo.svg';
import './App.css';

function Title() {
  return (
    <div className="title">
      <h1>Computer Vision App</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Title />
        <p>Insert URL or Type prompt:</p>
        <div className="input-area">
          <input type="text" placeholder="Enter URL to analyze or textual prompt to generate an image" />
        </div>
        <div className="input-area2">
          <button>Analyze</button>
          <button>Generate</button>
        </div>
      </header>
    </div>
  );
}

export default App;
