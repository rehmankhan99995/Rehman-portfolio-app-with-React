import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-cyan-400">Abdul Rehman</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer crafting beautiful digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <a href="https://github.com" className="hover:text-cyan-400 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" className="hover:text-cyan-400 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:contact@example.com" className="hover:text-cyan-400 transition-colors">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}