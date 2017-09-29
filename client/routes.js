import React from 'react';
import ReactDOM from 'react-dom';
import DiscussionComponent from './components/DiscussionComponent.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <DiscussionComponent/>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
