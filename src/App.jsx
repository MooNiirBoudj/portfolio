import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./components/about section/about_section"; 
import Everything from "./pages/home_page"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Everything />} />
          <Route path="/about" element={<AboutMe/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
