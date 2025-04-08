import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </motion.main>
      </div>
    </AnimatePresence>
  );
}

export default App;