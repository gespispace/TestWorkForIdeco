import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Hellot CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootEl2ement = document.getElementById('root');
ReactDOM.render(<App />, rootEl2ement);
