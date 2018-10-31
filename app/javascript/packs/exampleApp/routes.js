import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import TopNav from './components/topnav';

import LandingPage from './components/landingPage';
import LocationPage from './components/locationPage';

const App = (props) => (
  <Router>
    <div>
      <TopNav />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/location' component={LocationPage} />
        <Route component={LandingPage} />
      </Switch>
    </div>
  </Router>
)
export default App;