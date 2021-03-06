import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { todoMainReducer } from "./reducers/todoReducer";
import { addTodo } from "./actions/todoActions";

const store = createStore(todoMainReducer)

store.subscribe(() => { console.log(store.getState()) });

store.dispatch(addTodo("TEST 1"));
store.dispatch(addTodo("TEST 2"));
store.dispatch(addTodo("TEST 3"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
