import logo from './logo.svg';
import './App.css';
import React from 'react';

const OPENAI_API_ENDPOINT = process.env.REACT_APP_OPENAI_API_ENDPOINT;
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const API_KEY = process.env.REACT_APP_API_KEY;  
                                

function Title() {
  return (
    <div className="title">
      <h1>Computer Vision App v2</h1>
    </div>
  );
}

async function analyzeImage(imageUrl) {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': API_KEY
    },
    body: JSON.stringify({ url: imageUrl })  
  });
  const data = await response.json();
  console.log(data);
  return data;
}

async function generateImage(text) {
  const response = await fetch(OPENAI_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({ prompt: 'white small cat' })
  });
  const data = await response.json();
  return data;
}




function DisplayResults({ apiResponse }) {
  return (
    <div className="results">
      <h2>Results</h2>
      <img src={document.querySelector('.input-area input').value} alt="Processed" />
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </div>
  );
}


function App() {
  const [apiResponse, setApiResponse] = React.useState(null);

  const handleAnalyzeClick = async () => {
    const imageUrl = document.querySelector('.input-area input').value;
    const result = await analyzeImage(imageUrl);
    console.log(result);
    setApiResponse(result);
  };

  const handleGenerateClick = async () => {
    const text = document.querySelector('.input-area input').value;
    const result = await generateImage(text);
    setApiResponse(result);
  };

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
          <input type="text" placeholder="Enter URL to analyze or textual prompt to generate an image" value='https://www.apta.com/wp-content/uploads/DSC06230-e1553280516425.jpg' />
        </div>
        <div className="input-area2">
          <button onClick={handleAnalyzeClick}>Analyze</button>
          <button onClick={handleGenerateClick}>Generate</button>
        </div>
        {apiResponse && <DisplayResults apiResponse={apiResponse} />}
        {/* <img className="result-image" src={result} alt="result" /> */}
      </header>
    </div>
  );
}

export default App;
