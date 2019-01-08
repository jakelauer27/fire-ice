import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  
  document.getElementById('root'));
registerServiceWorker();
