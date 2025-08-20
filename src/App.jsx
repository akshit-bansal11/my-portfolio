// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import DotGrid from './components/backgrounds/Dotgrid';
import LightRays from './components/backgrounds/LightRays';
import BlackLegacy from './components/backgrounds/BlackLegacy';

function getDeviceType() {
  const ua = navigator.userAgent;
  const width = window.innerWidth;

  // Basic width-based detection
  if (width <= 767) return 'phone';
  if (width <= 1024) return 'tablet';
  return 'laptop';
}

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
    <motion.div
      className="flex flex-col font-thin justify-center items-center lg:gap-10 md:gap-7 gap-4 min-h-screen"
      style={{ minHeight: '100vh', height: '100%', position: 'relative' }}
    >
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <div className="relative h-full w-full bg-neutral-900">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#bdbdbd18_1px,transparent_1px),linear-gradient(to_bottom,#bdbdbd18_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
      </div>
      <NavBar page={page} />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */} 
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </motion.div>
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
