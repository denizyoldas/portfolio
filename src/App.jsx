import Intro from "./components/Intro/Intro";
import Topbar from "./components/topbar/topbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";

import { useState } from 'react';

import './app.scss';
import Menu from "./components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
