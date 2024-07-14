'use client'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center py-10 px-5 text-center">
        <motion.h1
          className="text-5xl font-bold leading-tight sm:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All About Calisthenics
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-lg sm:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your ultimate resource for everything related to calisthenics. Learn techniques, find workout plans, and stay motivated.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
