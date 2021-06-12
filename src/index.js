import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';
import ProviderContext from './Context/context';

const app = (
  <BrowserRouter>
    <ProviderContext>
      <App />
    </ProviderContext>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();