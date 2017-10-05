import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CreateNewPoll from './components/CreateNewPoll'

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={CreateNewPoll} />
        </div>
    </Router>), document.getElementById('app')
);
