import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import TrackerIndex from './components/TrackerIndex/TrackerIndex'
import NewTracker from './components/TrackerIndex/NewTracker'
import ConstraintItemIndex from './components/ConstraintTracker/ConstraintItemIndex'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<TrackerIndex/>}/>
            <Route path='/newTracker' element={<NewTracker/>}/>
            <Route path='/constraints/:id' element={<ConstraintItemIndex/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
