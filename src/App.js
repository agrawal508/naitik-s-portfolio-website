import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {!loaderDone && <Loader onComplete={() => setLoaderDone(true)} />}
      <div className="bg-white min-h-screen">
        <Navbar />
        <main>
          {/* All sections are mapped to your resume data */}
          <Hero />
          <About />

          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;