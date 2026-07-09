import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import Work from './components/Work';
import Research from './components/Research';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <TechTicker />
      <Work />
      <Research />
      <About />
      <Contact />
    </div>
  );
}
