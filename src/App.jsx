import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex-1">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
