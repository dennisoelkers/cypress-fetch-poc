import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';

const myFetch = () => {
  return window.fetch('http://localhost:3001/', {
    method: 'POST',
  })
  .then((resp) => {
    if (resp.ok) {
      const { status } = resp;
      const contentLength = Number.parseInt(resp.headers.get('Content-Length'), 10);
      const noContent = status === 204 || contentLength === 0;
  
      return noContent ? null : resp.json();
    }

    throw resp;
  }, (e) => { 
    console.log('Error occurred: ', e);
    throw e; 
  });

}

function App() {
  const [response, setResponse] = useState();
  const onButtonClick = useCallback(() => {
    myFetch()
      .then(() => setResponse('OK'), (e) => { console.log('Error: ', e); setResponse(String(e)); });
  }, [setResponse]);
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
        Current Response: {response}
        <button onClick={onButtonClick}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
