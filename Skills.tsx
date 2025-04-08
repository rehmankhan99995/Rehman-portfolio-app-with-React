import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="w-8 h-8 text-cyan-400" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend',
    icon: <Server className="w-8 h-8 text-cyan-400" />,
    items: ['Node.js', 'Express', 'Python', 'Java']
  },
  {
    category: 'Database',
    icon: <Database className="w-8 h-8 text-cyan-400" />,
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
  },
  {
    category: 'Other',
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    items: ['Git', 'Docker', 'AWS', 'CI/CD']
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}