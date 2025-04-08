import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function GlowingButton({ children, href, className = '' }: GlowingButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full 
        bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
        shadow-lg transition-all duration-300 hover:shadow-cyan-500/25 hover:shadow-xl
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 
        before:to-blue-400 before:opacity-0 before:transition-opacity hover:before:opacity-100
        ${className}`}
    >
      {children}
    </motion.a>
  );
}