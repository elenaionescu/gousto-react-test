import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import productSearchApp from './reducers';
import Root from './components/Root';



const store = createStore(productSearchApp, applyMiddleware(thunk));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
