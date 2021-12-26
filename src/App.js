import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import TrackerIndex from './components/TrackerIndex/TrackerIndex'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<TrackerIndex/>}/>

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
