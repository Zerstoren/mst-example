import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RootStore, RootStoreContext} from "./store";

ReactDOM.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={RootStore}>
      <App />
    </RootStoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
