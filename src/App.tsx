import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Internship />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
