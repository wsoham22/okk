import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/count';
import Home from './components/home';
import Logout from './components/logout';
import About from './components/about';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
