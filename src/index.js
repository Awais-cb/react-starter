import React from 'react';
import ReactDOM from 'react-dom';
// Globally included css
import './global/css/index.css';
// Globally included sass
import './global/scss/index.scss';
// Importing component to use
import App from './App';
import * as serviceWorker from './serviceWorker';
// Actual store
import { createStore } from 'redux';
// React's reaction with store
import { Provider } from 'react-redux';
// Importing reducers
import allReducers from './reducers';

/*
// REDUX START
// STORE -> GLOBALIZED STATE
// ACTION -> EVENTS TO MODIFY STORE U DESCRIBE WHAT U WANNA DO (E.G I AM HUNGRY) (INCREMENT, DECREMENT)
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER -> TAKES ACTION TO STORE (we can have multiple reducers)
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
      break;
    case 'DECREMENT':
      return state - 1
      break;
  }
}
let store = createStore(counter)

// DISPLAY CONSOLE
store.subscribe(() => { console.log('State Management ', store.getState()) })

// DISPATCH -> EXECUTES THE ACTION
store.dispatch(increment());
store.dispatch(decrement());
// REDUX END
*/
let store = createStore(
  allReducers,
  // Configuring redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    {/* Store's is now accessible in the react app */}
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
