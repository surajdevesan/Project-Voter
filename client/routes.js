import React from 'react';
import ReactDOM from 'react-dom';
import DiscussionComponent from './components/DiscussionComponent.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <DiscussionComponent/>
  </Provider>,
  document.getElementById('app')
);
