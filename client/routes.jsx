import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PollingPage from './components/PollingPage/PollingPage.js'

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={PollingPage} />
        </div>
    </Router>), document.getElementById('app')
);
