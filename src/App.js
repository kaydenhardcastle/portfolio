import React from 'react';
import { 
  Route, 
  Routes, 
  BrowserRouter as Router, 
} from 'react-router-dom';

import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<About />}
          />
          <Route 
            path="/portfolio" 
            element={<About />}
          />
          <Route 
            path="/about" 
            element={<About />}
          />
          <Route 
            path="/projects" 
            element={<Projects />}
          />
          <Route 
            path="/contact" 
            element={<Contact />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
