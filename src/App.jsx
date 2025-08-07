// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

function AppContent() {
  const location = useLocation();
  const path = location.pathname;

  // Logic to determine current "page" type
  let page = 'default';

  if (path === '/') {
    page = 'home';
  } else if (path === '/projects') {
    page = 'projects';
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <NavBar page={page} />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */} 
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  );

}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
