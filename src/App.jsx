// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import DotGrid from './components/backgrounds/Dotgrid';
import LightRays from './components/backgrounds/LightRays';

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
      className="flex flex-col lg:font-thin font-medium justify-center items-center lg:gap-10 md:gap-7 gap-4 min-h-screen"
      style={{ minHeight: '100vh', height: '100%', position: 'relative' }}
    >
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        {getDeviceType() === 'phone' || getDeviceType() === 'tablet' ?
        (
          <div className="relative h-full w-full bg-neutral-900">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#bdbdbd18_1px,transparent_1px),linear-gradient(to_bottom,#bdbdbd18_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
        ) : (
          <DotGrid
            dotSize={1.5}
            gap={20}
            baseColor="#565656"
            activeColor="#ffffff"
            proximity={150}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1}
          />
        )}
      </div>
      {/* <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <LightRays
            raysOrigin="top-center"
            raysColor="a1a1a1"
            raysSpeed={1}
            lightSpread={1}
            rayLength={1}
            followMouse={false}
            mouseInfluence={0}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
          />
      </div> */}
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
